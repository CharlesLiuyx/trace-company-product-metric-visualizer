/* ====================================================================
 * Novo Nordisk - Q3 FY25 income statement (DKK B)
 * Reconstructed from input/processed/novo-nordisk-q3-fy25.png as a fixed
 * d3-sankey layout. Diabetes-care sub-lines merge before Net sales, then
 * the source chart follows the gross-profit / operating-profit waterfall.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const NAVY = '#0d2876';
  const NAVY_LINK = '#8997ba';
  const GREEN = '#24a11d';
  const GREEN_LABEL = '#008f4f';
  const GREEN_LINK = '#9bce98';
  const RED = '#dc0800';
  const RED_LABEL = '#a5190b';
  const RED_LINK = '#df8484';
  const NOTE = '#707070';
  const RIGHT_X = 2505;

  const annotations = (glpLine1, glpLine2) => `
    <g font-size="30" fill="${NOTE}" text-anchor="middle">
      <text x="332" y="551">${glpLine1}</text>
      <text x="332" y="589">${glpLine2}</text>
    </g>`;
  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap == null ? 8 : options.lineGap, lines,
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'novo-nordisk-q3-fy25',
    name: 'Novo Nordisk · Q3 FY25',
    company: 'Novo Nordisk',
    meta: {
      company: 'Novo Nordisk',
      title: 'Novo Nordisk Q3 FY25 Income Statement',
      period: 'in DKK',
      periodNote: '',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/novo-nordisk-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 197, titleSize: 117, titleWeight: 800, titleTextLength: 2500,
      periodX: 185, periodY: 276, periodSize: 40, periodWeight: 800,
      periodNoteX: -1000, periodNoteY: -1000,
    },
    render: {
      width: 2667, height: 1500, background: BG,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: '#155077', subtitleColor: '#155077', noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-logo', href: 'data/assets/raster-annotations/novo-nordisk/q1-fy26/company-logo.png', x: 1029, y: 221, width: 381, height: 275 },
      { key: 'ozempic', href: 'data/assets/raster-annotations/novo-nordisk/diabetes-care-products.png', x: 15, y: 465, width: 258, height: 58 },
      { key: 'victoza', href: 'data/assets/raster-annotations/novo-nordisk/victoza.png', x: 50, y: 525, width: 168, height: 58 },
      { key: 'insulin-products', href: 'data/assets/raster-annotations/novo-nordisk/insulin-products.png', x: 36, y: 708, width: 211, height: 112 },
      { key: 'wegovy', href: 'data/assets/raster-annotations/novo-nordisk/obesity-care-products.png', x: 299, y: 1078, width: 208, height: 49 },
      { key: 'saxenda', href: 'data/assets/raster-annotations/novo-nordisk/saxenda.png', x: 311, y: 1119, width: 188, height: 49 },
      { key: 'rare-disease-products', href: 'data/assets/raster-annotations/novo-nordisk/rare-disease-products.png', x: 289, y: 1266, width: 241, height: 107 },
    ],
    annotationsSvg: annotations('Glucagon-like', 'peptide-1'),
    layout: {
      scale: 4.08,
      nodes: {
        glp1: { x: 441, y: 449, width: 74, height: 152 },
        insulin: { x: 441, y: 779, width: 74, height: 51 },
        other_diabetes: { x: 441, y: 985, width: 74, height: 3 },
        diabetes_care: { x: 815, y: 570, width: 74, height: 204 },
        obesity_care: { x: 815, y: 1055, width: 74, height: 89 },
        rare_disease: { x: 815, y: 1305, width: 74, height: 22 },
        revenue: { x: 1189, y: 669, width: 74, height: 310 },
        gross_profit: { x: 1562, y: 567, width: 74, height: 237 },
        cost_of_sales: { x: 1562, y: 1011, width: 74, height: 76 },
        operating_profit: { x: 1936, y: 482, width: 74, height: 99 },
        operating_expenses: { x: 1936, y: 757, width: 74, height: 140 },
        net_profit: { x: 2309, y: 380, width: 74, height: 84 },
        other_income: { x: 2182, y: 540, width: 74, height: 9 },
        tax: { x: 2309, y: 682, width: 74, height: 24 },
        sales_distribution: { x: 2309, y: 888, width: 74, height: 67 },
        rnd: { x: 2309, y: 1103, width: 74, height: 64 },
        admin_other: { x: 2309, y: 1309, width: 74, height: 9 },
      },
      labels: {
        glp1: { blocks: [
          block(478, 345, [line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })]),
          block(422, 460, [line('GLP-1', 40, { weight: 700 })], { anchor: 'end' }),
        ] },
        diabetes_care: { blocks: [block(852, 425, [line('Diabetes care', 40, { weight: 700 }), line('$value', 40), line('+3% Y/Y', 29, { color: NOTE })])] },
        insulin: { blocks: [
          block(478, 681, [line('$value', 40), line('(4%) Y/Y', 29, { color: NOTE })]),
          block(422, 779, [line('Insulin', 40, { weight: 700 })], { anchor: 'end' }),
        ] },
        other_diabetes: { blocks: [
          block(478, 886, [line('$value', 40), line('(14%) Y/Y', 29, { color: NOTE })]),
          block(397, 962, [line('Other diabetes', 40, { weight: 700 })], { anchor: 'end' }),
        ] },
        obesity_care: { blocks: [
          block(852, 966, [line('$value', 40), line('+12% Y/Y', 29, { color: NOTE })]),
          block(779, 1083, [line('Obesity care', 40, { weight: 700 })], { anchor: 'end' }),
        ] },
        rare_disease: { blocks: [
          block(852, 1202, [line('$value', 40), line('+3% Y/Y', 29, { color: NOTE })]),
          block(779, 1292, [line('Rare disease', 40, { weight: 700 })], { anchor: 'end' }),
        ] },
        revenue: { blocks: [block(1226, 526, [line('Net sales', 40, { weight: 700 }), line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })])] },
        gross_profit: { blocks: [block(1599, 385, [line('Gross profit', 40, { weight: 700 }), line('$value', 40), line('76% margin', 29, { color: NOTE }), line('(8pp) Y/Y', 29, { color: NOTE })])] },
        cost_of_sales: { blocks: [block(1599, 1095, [line('Cost of sales', 40, { weight: 700 }), line('$value', 40)])] },
        operating_profit: { blocks: [block(1973, 300, [line('Operating profit', 40, { weight: 700 }), line('$value', 40), line('32% margin', 29, { color: NOTE }), line('(16pp) Y/Y', 29, { color: NOTE })])] },
        operating_expenses: { blocks: [block(1973, 904, [line('Operating', 40, { weight: 700 }), line('expenses', 40, { weight: 700 }), line('$value', 40)])] },
        net_profit: { blocks: [block(2412, 363, [line('Net profit', 40, { weight: 700 }), line('$value', 40), line('27% margin', 29, { color: NOTE }), line('(12pp) Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
        other_income: { blocks: [block(2219, 567, [line('Other', 30, { weight: 700 }), line('$value', 30)])] },
        tax: { blocks: [block(RIGHT_X, 661, [line('Tax', 30, { weight: 700 }), line('$value', 30)])] },
        sales_distribution: { blocks: [block(RIGHT_X, 887, [line('Sales &', 30, { weight: 700 }), line('Distribution', 30, { weight: 700 }), line('$value', 30), line('21% of revenue', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })])] },
        rnd: { blocks: [block(RIGHT_X, 1103, [line('R&D', 30, { weight: 700 }), line('$value', 30), line('21% of revenue', 29, { color: NOTE }), line('+7pp Y/Y', 29, { color: NOTE })])] },
        admin_other: { blocks: [block(RIGHT_X, 1279, [line('Admin', 30, { weight: 700 }), line('& Other', 30, { weight: 700 }), line('$value', 30)])] },
      },
    },
    nodes: [
      { id: 'glp1', col: 0, order: 0, type: 'source', label: 'GLP-1', value: 36.7, valueText: '36.7B', notes: ['+5% Y/Y'] },
      { id: 'insulin', col: 0, order: 1, type: 'source', label: 'Insulin', value: 12.0, valueText: '12.0B', notes: ['(4%) Y/Y'] },
      { id: 'other_diabetes', col: 0, order: 2, type: 'source', label: 'Other diabetes', value: 0.4, valueText: '0.4B', notes: ['(14%) Y/Y'] },
      { id: 'diabetes_care', col: 1, order: 0, type: 'source', label: 'Diabetes care', value: 49.1, valueText: '49.1B', notes: ['+3% Y/Y'] },
      { id: 'obesity_care', col: 1, order: 1, type: 'source', label: 'Obesity care', value: 21.1, valueText: '21.1B', notes: ['+12% Y/Y'] },
      { id: 'rare_disease', col: 1, order: 2, type: 'source', label: 'Rare disease', value: 4.7, valueText: '4.7B', notes: ['+3% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 75.0, valueText: '75.0B', notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 57.1, valueText: '57.1B', notes: ['76% margin', '(8pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 17.9, valueText: '(17.9B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 23.7, valueText: '23.7B', notes: ['32% margin', '(16pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 33.3, valueText: '(33.3B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 20.0, valueText: '20.0B', notes: ['27% margin', '(12pp) Y/Y'] },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 1.8, valueText: '1.8B' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 5.5, valueText: '(5.5B)' },
      { id: 'sales_distribution', col: 5, order: 3, type: 'cost', label: ['Sales &', 'Distribution'], value: 16.0, valueText: '(16.0B)', notes: ['21% of revenue', '+0pp Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 15.4, valueText: '(15.4B)', notes: ['21% of revenue', '+7pp Y/Y'] },
      { id: 'admin_other', col: 5, order: 5, type: 'cost', label: ['Admin', '& Other'], value: 2.0, valueText: '(2.0B)' },
    ],
    links: [
      { source: 'glp1', target: 'diabetes_care', value: 36.7, sourceWidth: 152, targetWidth: 149, y0: 525, y1: 644.5, linkTint: NAVY_LINK },
      { source: 'insulin', target: 'diabetes_care', value: 12.0, sourceWidth: 51, targetWidth: 49, y0: 804.5, y1: 743.5, linkTint: NAVY_LINK },
      { source: 'other_diabetes', target: 'diabetes_care', value: 0.4, sourceWidth: 3, targetWidth: 6, y0: 986.5, y1: 771, linkTint: NAVY_LINK },
      { source: 'diabetes_care', target: 'revenue', value: 49.1, sourceWidth: 204, targetWidth: 204, y0: 672, y1: 771, linkTint: NAVY_LINK },
      { source: 'obesity_care', target: 'revenue', value: 21.1, sourceWidth: 89, targetWidth: 87, y0: 1099.5, y1: 916.5, linkTint: NAVY_LINK },
      { source: 'rare_disease', target: 'revenue', value: 4.7, sourceWidth: 22, targetWidth: 19, y0: 1316, y1: 969.5, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 57.1, sourceWidth: 237, targetWidth: 237, y0: 787.5, y1: 685.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 17.9, sourceWidth: 73, targetWidth: 76, y0: 942.5, y1: 1049, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 23.7, sourceWidth: 99, targetWidth: 99, y0: 616.5, y1: 531.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 33.3, sourceWidth: 138, targetWidth: 140, y0: 735, y1: 827, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 18.2, sourceWidth: 75, targetWidth: 75, y0: 519.5, y1: 417.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 5.5, sourceWidth: 24, targetWidth: 24, y0: 569, y1: 694, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_distribution', value: 16.0, sourceWidth: 67, targetWidth: 67, y0: 790.5, y1: 921.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 15.4, sourceWidth: 64, targetWidth: 64, y0: 856, y1: 1135, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'admin_other', value: 2.0, sourceWidth: 9, targetWidth: 9, y0: 892.5, y1: 1313.5, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 1.8, sourceWidth: 9, targetWidth: 9, y0: 544.5, y1: 459.5, linkTint: GREEN_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Ozempic', 'Victoza', 'Tresiba', 'Levemir', 'Wegovy', 'Saxenda', 'NovoSeven RT', 'novo nordisk'],
      zh: {
        name: '诺和诺德 · 2025 财年第三季度',
        meta: { title: '诺和诺德 2025 财年第三季度利润表', period: '单位：丹麦克朗', titleSize: 108, titleTextLength: 2200 },
        annotationsSvg: annotations('胰高血糖素样', '肽-1'),
        nodes: {
          glp1: { label: 'GLP-1', notes: ['同比 +5%'] }, insulin: { label: '胰岛素', notes: ['同比 (4%)'] }, other_diabetes: { label: '其他糖尿病业务', notes: ['同比 (14%)'] }, diabetes_care: { label: '糖尿病护理', notes: ['同比 +3%'] }, obesity_care: { label: '肥胖症护理', notes: ['同比 +12%'] }, rare_disease: { label: '罕见病', notes: ['同比 +3%'] }, revenue: { label: '净销售额', notes: ['同比 +5%'] }, gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 (8 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 (16 个百分点)'] }, operating_expenses: { label: ['营业费用'] }, net_profit: { label: '净利润', notes: ['利润率 27%', '同比 (12 个百分点)'] }, other_income: { label: '其他' }, tax: { label: '税费' }, sales_distribution: { label: ['销售与', '分销'], notes: ['占收入 21%', '同比 +0 个百分点'] }, rnd: { label: '研发', notes: ['占收入 21%', '同比 +7 个百分点'] }, admin_other: { label: ['管理及其他'] },
        },
        layout: { labels: {
        glp1: { blocks: [
            block(478, 345, [line('$value', 40), line('同比 +5%', 29, { color: NOTE })]),
            block(422, 460, [line('GLP-1', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          diabetes_care: { blocks: [block(852, 425, [line('糖尿病护理', 40, { weight: 700 }), line('$value', 40), line('同比 +3%', 29, { color: NOTE })])] },
          insulin: { blocks: [
            block(478, 681, [line('$value', 40), line('同比 (4%)', 29, { color: NOTE })]),
            block(422, 779, [line('胰岛素', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          other_diabetes: { blocks: [
            block(478, 886, [line('$value', 40), line('同比 (14%)', 29, { color: NOTE })]),
            block(397, 962, [line('其他糖尿病业务', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          obesity_care: { blocks: [
            block(852, 966, [line('$value', 40), line('同比 +12%', 29, { color: NOTE })]),
            block(779, 1083, [line('肥胖症护理', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          rare_disease: { blocks: [
            block(852, 1202, [line('$value', 40), line('同比 +3%', 29, { color: NOTE })]),
            block(779, 1292, [line('罕见病', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          revenue: { blocks: [block(1226, 526, [line('净销售额', 40, { weight: 700 }), line('$value', 40), line('同比 +5%', 29, { color: NOTE })])] },
          gross_profit: { blocks: [block(1599, 385, [line('毛利润', 40, { weight: 700 }), line('$value', 40), line('利润率 76%', 29, { color: NOTE }), line('同比 (8 个百分点)', 29, { color: NOTE })])] },
          cost_of_sales: { blocks: [block(1599, 1095, [line('销售成本', 40, { weight: 700 }), line('$value', 40)])] },
          operating_profit: { blocks: [block(1973, 300, [line('营业利润', 40, { weight: 700 }), line('$value', 40), line('利润率 32%', 29, { color: NOTE }), line('同比 (16 个百分点)', 29, { color: NOTE })])] },
          operating_expenses: { blocks: [block(1973, 904, [line('营业费用', 40, { weight: 700 }), line('$value', 40)])] },
          net_profit: { blocks: [block(2412, 363, [line('净利润', 40, { weight: 700 }), line('$value', 40), line('利润率 27%', 29, { color: NOTE }), line('同比 (12 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
          other_income: { blocks: [block(2219, 567, [line('其他', 30, { weight: 700 }), line('$value', 30)])] },
          tax: { blocks: [block(RIGHT_X, 661, [line('税费', 30, { weight: 700 }), line('$value', 30)])] },
          sales_distribution: { blocks: [block(RIGHT_X, 887, [line('销售与', 30, { weight: 700 }), line('分销', 30, { weight: 700 }), line('$value', 30), line('占收入 21%', 29, { color: NOTE }), line('同比 +0 个百分点', 29, { color: NOTE })])] },
          rnd: { blocks: [block(RIGHT_X, 1103, [line('研发', 30, { weight: 700 }), line('$value', 30), line('占收入 21%', 29, { color: NOTE }), line('同比 +7 个百分点', 29, { color: NOTE })])] },
          admin_other: { blocks: [block(RIGHT_X, 1279, [line('管理及其他', 30, { weight: 700 }), line('$value', 30)])] },
        } },
      },
    },
  });
})();

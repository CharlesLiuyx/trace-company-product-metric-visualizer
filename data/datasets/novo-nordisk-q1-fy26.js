/* ====================================================================
 * Novo Nordisk - Q1 FY26 income statement (DKK B)
 * Reconstructed from input/processed/novo-nordisk-q1-fy26.png as a fixed
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
  const RIGHT_X = 2470;

  const annotations = (glpLine1, glpLine2) => `
    <g font-size="30" fill="${NOTE}" text-anchor="middle">
      <text x="332" y="551">${glpLine1}</text>
      <text x="332" y="589">${glpLine2}</text>
    </g>`;
  const labelLine = (text, size, options = {}) => ({ text, size, ...options });
  const labelBlock = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap == null ? 8 : options.lineGap, lines,
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'novo-nordisk-q1-fy26',
    name: 'Novo Nordisk · Q1 FY26',
    company: 'Novo Nordisk',
    meta: {
      company: 'Novo Nordisk',
      title: 'Novo Nordisk Q1 FY26 Income Statement',
      period: 'in DKK',
      periodNote: '',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/novo-nordisk-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 197, titleSize: 117, titleWeight: 800, titleTextLength: 2500,
      periodX: 185, periodY: 276, periodSize: 40, periodWeight: 800,
      periodNoteX: -1000, periodNoteY: -1000,
    },
    render: {
      width: 2667, height: 1500, background: BG,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: '#155077', subtitleColor: NOTE, noteColor: NOTE,
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
      { key: 'ozempic', href: 'data/assets/raster-annotations/novo-nordisk/diabetes-care-products.png', x: 15, y: 470, width: 258, height: 58 },
      { key: 'victoza', href: 'data/assets/raster-annotations/novo-nordisk/victoza.png', x: 50, y: 531, width: 168, height: 58 },
      { key: 'insulin-products', href: 'data/assets/raster-annotations/novo-nordisk/insulin-products.png', x: 36, y: 758, width: 211, height: 112 },
      { key: 'wegovy', href: 'data/assets/raster-annotations/novo-nordisk/obesity-care-products.png', x: 299, y: 1061, width: 208, height: 49 },
      { key: 'saxenda', href: 'data/assets/raster-annotations/novo-nordisk/saxenda.png', x: 311, y: 1102, width: 188, height: 49 },
      { key: 'rare-disease-products', href: 'data/assets/raster-annotations/novo-nordisk/rare-disease-products.png', x: 289, y: 1254, width: 241, height: 107 },
    ],
    annotationsSvg: annotations('Glucagon-like', 'peptide-1'),
    layout: {
      scale: 3.42,
      nodes: {
        glp1: { x: 441, y: 453, width: 74, height: 167 },
        insulin: { x: 441, y: 779, width: 74, height: 64 },
        other_diabetes: { x: 441, y: 1009, width: 74, height: 2 },
        diabetes_care: { x: 815, y: 579, width: 74, height: 233 },
        obesity_care: { x: 815, y: 1040, width: 74, height: 80 },
        rare_disease: { x: 815, y: 1295, width: 74, height: 19 },
        revenue: { x: 1189, y: 672, width: 74, height: 331 },
        gross_profit: { x: 1563, y: 582, width: 74, height: 284 },
        cost_of_sales: { x: 1563, y: 1062, width: 74, height: 47 },
        operating_profit: { x: 1937, y: 478, width: 74, height: 204 },
        operating_expenses: { x: 1937, y: 870, width: 74, height: 81 },
        net_profit: { x: 2311, y: 375, width: 74, height: 167 },
        other_income: { x: 2185, y: 602, width: 74, height: 9 },
        tax: { x: 2311, y: 751, width: 74, height: 46 },
        sales_distribution: { x: 2311, y: 931, width: 74, height: 41 },
        rnd: { x: 2311, y: 1122, width: 74, height: 35 },
        admin_other: { x: 2311, y: 1325, width: 74, height: 4 },
      },
      labels: {
        glp1: { blocks: [
          { x: 478, top: 364, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+23% Y/Y', size: 29, color: NOTE }] },
          { x: 422, top: 465, anchor: 'end', lines: [{ text: 'GLP-1', size: 40, weight: 700 }] },
        ] },
        diabetes_care: { blocks: [{ x: 852, top: 440, anchor: 'middle', lineGap: 8, lines: [{ text: 'Diabetes care', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '+25% Y/Y', size: 29, color: NOTE }] }] },
        insulin: { blocks: [
          { x: 478, top: 690, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+25% Y/Y', size: 29, color: NOTE }] },
          { x: 422, top: 793, anchor: 'end', lines: [{ text: 'Insulin', size: 40, weight: 700 }] },
        ] },
        other_diabetes: { blocks: [
          { x: 478, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+18% Y/Y', size: 29, color: NOTE }] },
          { x: 397, top: 994, anchor: 'end', lines: [{ text: 'Other diabetes', size: 40, weight: 700 }] },
        ] },
        obesity_care: { blocks: [
          { x: 852, top: 952, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+27% Y/Y', size: 29, color: NOTE }] },
          { x: 779, top: 1068, anchor: 'end', lines: [{ text: 'Obesity care', size: 40, weight: 700 }] },
        ] },
        rare_disease: { blocks: [
          { x: 852, top: 1205, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+18% Y/Y', size: 29, color: NOTE }] },
          { x: 779, top: 1304, anchor: 'end', lines: [{ text: 'Rare disease', size: 40, weight: 700 }] },
        ] },
        revenue: { blocks: [{ x: 1226, top: 532, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net sales', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '+24% Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1600, top: 402, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '86% margin', size: 29, color: NOTE }, { text: '+2pp Y/Y', size: 29, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1600, top: 1131, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 40, weight: 700 }, { text: '$value', size: 40 }] }] },
        operating_profit: { blocks: [{ x: 1974, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '62% margin', size: 29, color: NOTE }, { text: '+12pp Y/Y', size: 29, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1974, top: 975, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 700 }, { text: 'expenses', size: 40, weight: 700 }, { text: '$value', size: 40 }] }] },
        net_profit: { blocks: [{ x: 2418, top: 378, anchor: 'start', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '50% margin', size: 29, color: NOTE }, { text: '+13pp Y/Y', size: 29, color: NOTE }] }] },
        other_income: { blocks: [{ x: 2222, top: 632, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 30, weight: 700 }, { text: '$value', size: 30 }] }] },
        tax: { blocks: [{ x: RIGHT_X, top: 742, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 30, weight: 700 }, { text: '$value', size: 30 }] }] },
        sales_distribution: { blocks: [{ x: 2445, top: 887, anchor: 'start', lineGap: 8, lines: [{ text: 'Sales &', size: 30, weight: 700 }, { text: 'Distribution', size: 30, weight: 700 }, { text: '$value', size: 30 }, { text: '12% of revenue', size: 29, color: NOTE }, { text: '(7pp) Y/Y', size: 29, color: NOTE }] }] },
        rnd: { blocks: [{ x: 2445, top: 1105, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 30, weight: 700 }, { text: '$value', size: 30 }, { text: '11% of revenue', size: 29, color: NOTE }, { text: '(3pp) Y/Y', size: 29, color: NOTE }] }] },
        admin_other: { blocks: [{ x: 2445, top: 1275, anchor: 'start', lineGap: 8, lines: [{ text: 'Admin', size: 30, weight: 700 }, { text: '& Other', size: 30, weight: 700 }, { text: '$value', size: 30 }] }] },
      },
    },
    nodes: [
      { id: 'glp1', col: 0, order: 0, type: 'source', label: 'GLP-1', value: 48.7, notes: ['+23% Y/Y'] },
      { id: 'insulin', col: 0, order: 1, type: 'source', label: 'Insulin', value: 18.8, notes: ['+25% Y/Y'] },
      { id: 'other_diabetes', col: 0, order: 2, type: 'source', label: 'Other diabetes', value: 0.6, notes: ['+18% Y/Y'] },
      { id: 'diabetes_care', col: 1, order: 0, type: 'source', label: 'Diabetes care', value: 68.0, notes: ['+25% Y/Y'] },
      { id: 'obesity_care', col: 1, order: 1, type: 'source', label: 'Obesity care', value: 23.3, notes: ['+27% Y/Y'] },
      { id: 'rare_disease', col: 1, order: 2, type: 'source', label: 'Rare disease', value: 5.5, notes: ['+18% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 96.8, notes: ['+24% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 83.2, notes: ['86% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 13.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 59.6, notes: ['62% margin', '+12pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 23.6 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 48.6, notes: ['50% margin', '+13pp Y/Y'] },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 2.6 },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 13.6 },
      { id: 'sales_distribution', col: 5, order: 3, type: 'cost', label: ['Sales &', 'Distribution'], value: 12.0, notes: ['12% of revenue', '(7pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 10.3, notes: ['11% of revenue', '(3pp) Y/Y'] },
      { id: 'admin_other', col: 5, order: 5, type: 'cost', label: ['Admin', '& Other'], value: 1.2 },
    ],
    links: [
      { source: 'glp1', target: 'diabetes_care', value: 48.7, sourceWidth: 167, targetWidth: 166, y0: 536.5, y1: 662, linkTint: NAVY_LINK },
      { source: 'insulin', target: 'diabetes_care', value: 18.8, sourceWidth: 64, targetWidth: 64, y0: 811, y1: 777, linkTint: NAVY_LINK },
      { source: 'other_diabetes', target: 'diabetes_care', value: 0.6, sourceWidth: 2, targetWidth: 2, y0: 1010, y1: 810, linkTint: NAVY_LINK },
      { source: 'diabetes_care', target: 'revenue', value: 68.0, sourceWidth: 233, targetWidth: 233, y0: 695.5, y1: 788.5, linkTint: NAVY_LINK },
      { source: 'obesity_care', target: 'revenue', value: 23.3, sourceWidth: 80, targetWidth: 80, y0: 1080, y1: 945, linkTint: NAVY_LINK },
      { source: 'rare_disease', target: 'revenue', value: 5.5, sourceWidth: 19, targetWidth: 19, y0: 1304.5, y1: 993.5, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 83.2, sourceWidth: 284, targetWidth: 284, y0: 814, y1: 724, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 13.6, sourceWidth: 47, targetWidth: 47, y0: 979.5, y1: 1085.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 59.6, sourceWidth: 204, targetWidth: 204, y0: 684, y1: 580, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 23.6, sourceWidth: 80, targetWidth: 81, y0: 826, y1: 910.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 46.0, sourceWidth: 157, targetWidth: 157, y0: 556.5, y1: 453.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 13.6, sourceWidth: 47, targetWidth: 46, y0: 658.5, y1: 774, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_distribution', value: 12.0, sourceWidth: 41, targetWidth: 41, y0: 890.5, y1: 951.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 10.3, sourceWidth: 35, targetWidth: 35, y0: 928.5, y1: 1139.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'admin_other', value: 1.2, sourceWidth: 4, targetWidth: 4, y0: 949, y1: 1327, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 2.6, sourceWidth: 9, targetWidth: 10, y0: 606.5, y1: 537, linkTint: GREEN_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Ozempic', 'Victoza', 'Tresiba', 'Levemir', 'Wegovy', 'Saxenda', 'NovoSeven RT', 'novo nordisk'],
      zh: {
        name: '诺和诺德 · 2026 财年第一季度',
        meta: { title: '诺和诺德 2026 财年第一季度利润表', period: '单位：丹麦克朗', titleSize: 108, titleTextLength: 2200 },
        annotationsSvg: annotations('胰高血糖素样', '肽-1'),
        nodes: {
          glp1: { label: 'GLP-1', notes: ['同比 +23%'] }, insulin: { label: '胰岛素', notes: ['同比 +25%'] }, other_diabetes: { label: '其他糖尿病业务', notes: ['同比 +18%'] }, diabetes_care: { label: '糖尿病护理', notes: ['同比 +25%'] }, obesity_care: { label: '肥胖症护理', notes: ['同比 +27%'] }, rare_disease: { label: '罕见病', notes: ['同比 +18%'] }, revenue: { label: '净销售额', notes: ['同比 +24%'] }, gross_profit: { label: '毛利润', notes: ['利润率 86%', '同比 +2 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 62%', '同比 +12 个百分点'] }, operating_expenses: { label: ['营业费用'] }, net_profit: { label: '净利润', notes: ['利润率 50%', '同比 +13 个百分点'] }, other_income: { label: '其他' }, tax: { label: '税费' }, sales_distribution: { label: ['销售与', '分销'], notes: ['占收入 12%', '同比 (7 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 11%', '同比 (3 个百分点)'] }, admin_other: { label: ['管理及其他'] },
        },
        layout: { labels: {
          glp1: { blocks: [
            labelBlock(478, 364, [labelLine('$value', 40), labelLine('同比 +23%', 29, { color: NOTE })]),
            labelBlock(422, 465, [labelLine('GLP-1', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          diabetes_care: { blocks: [labelBlock(852, 440, [labelLine('糖尿病护理', 40, { weight: 700 }), labelLine('$value', 40), labelLine('同比 +25%', 29, { color: NOTE })])] },
          insulin: { blocks: [
            labelBlock(478, 690, [labelLine('$value', 40), labelLine('同比 +25%', 29, { color: NOTE })]),
            labelBlock(422, 793, [labelLine('胰岛素', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          other_diabetes: { blocks: [
            labelBlock(478, 920, [labelLine('$value', 40), labelLine('同比 +18%', 29, { color: NOTE })]),
            labelBlock(397, 994, [labelLine('其他糖尿病业务', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          obesity_care: { blocks: [
            labelBlock(852, 952, [labelLine('$value', 40), labelLine('同比 +27%', 29, { color: NOTE })]),
            labelBlock(779, 1068, [labelLine('肥胖症护理', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          rare_disease: { blocks: [
            labelBlock(852, 1205, [labelLine('$value', 40), labelLine('同比 +18%', 29, { color: NOTE })]),
            labelBlock(779, 1304, [labelLine('罕见病', 40, { weight: 700 })], { anchor: 'end' }),
          ] },
          revenue: { blocks: [labelBlock(1226, 532, [labelLine('净销售额', 40, { weight: 700 }), labelLine('$value', 40), labelLine('同比 +24%', 29, { color: NOTE })])] },
          gross_profit: { blocks: [labelBlock(1600, 402, [labelLine('毛利润', 40, { weight: 700 }), labelLine('$value', 40), labelLine('利润率 86%', 29, { color: NOTE }), labelLine('同比 +2 个百分点', 29, { color: NOTE })])] },
          cost_of_sales: { blocks: [labelBlock(1600, 1131, [labelLine('销售成本', 40, { weight: 700 }), labelLine('$value', 40)])] },
          operating_profit: { blocks: [labelBlock(1974, 302, [labelLine('营业利润', 40, { weight: 700 }), labelLine('$value', 40), labelLine('利润率 62%', 29, { color: NOTE }), labelLine('同比 +12 个百分点', 29, { color: NOTE })])] },
          operating_expenses: { blocks: [labelBlock(1974, 975, [labelLine('营业费用', 40, { weight: 700 }), labelLine('$value', 40)])] },
          net_profit: { blocks: [labelBlock(2418, 378, [labelLine('净利润', 40, { weight: 700 }), labelLine('$value', 40), labelLine('利润率 50%', 29, { color: NOTE }), labelLine('同比 +13 个百分点', 29, { color: NOTE })], { anchor: 'start' })] },
          other_income: { blocks: [labelBlock(2222, 632, [labelLine('其他', 30, { weight: 700 }), labelLine('$value', 30)])] },
          tax: { blocks: [labelBlock(RIGHT_X, 742, [labelLine('税费', 30, { weight: 700 }), labelLine('$value', 30)])] },
          sales_distribution: { blocks: [labelBlock(2445, 887, [labelLine('销售与', 30, { weight: 700 }), labelLine('分销', 30, { weight: 700 }), labelLine('$value', 30), labelLine('占收入 12%', 29, { color: NOTE }), labelLine('同比 (7 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
          rnd: { blocks: [labelBlock(2445, 1105, [labelLine('研发', 30, { weight: 700 }), labelLine('$value', 30), labelLine('占收入 11%', 29, { color: NOTE }), labelLine('同比 (3 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
          admin_other: { blocks: [labelBlock(2445, 1275, [labelLine('管理及其他', 30, { weight: 700 }), labelLine('$value', 30)], { anchor: 'start' })] },
        } },
      },
    },
  });
})();

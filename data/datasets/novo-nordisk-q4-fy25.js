/* ====================================================================
 * Novo Nordisk - Q4 FY25 income statement (DKK B)
 * Reconstructed from input/processed/novo-nordisk-q4-fy25.png as a fixed
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

  const logoSvg = `
    <g fill="none" stroke="${NAVY}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M148 96c-12-35 9-60 40-60 31 0 50 26 39 60-8 24-30 39-41 66-12-28-31-43-38-66Z"/>
      <path d="M110 143c25 7 46 7 72 0 28-7 57 3 69 26l4 64h-16l-5-46-9 45h-18l-5-45-10 45h-18l-9-45-9 45h-17l7-54c-17-9-31-22-37-39Z"/>
      <path d="M109 145l-16 12 13 9"/><circle cx="111" cy="159" r="2" fill="${NAVY}"/>
      <path d="M128 125c13 11 33 15 53 12M202 127c16 8 31 8 44 0M162 144v24M191 144v24M220 147v22"/>
    </g>
    <text x="180" y="289" text-anchor="middle" font-family="Arial, sans-serif" font-size="51" letter-spacing="-3" fill="${NAVY}">novo nordisk</text>`;

  const annotations = (glpLine1, glpLine2) => `
    <g font-family="Montserrat, Arial, sans-serif" font-size="30" fill="${NOTE}" text-anchor="middle">
      <text x="332" y="551">${glpLine1}</text>
      <text x="332" y="589">${glpLine2}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'novo-nordisk-q4-fy25',
    name: 'Novo Nordisk · Q4 FY25',
    company: 'Novo Nordisk',
    meta: {
      company: 'Novo Nordisk',
      title: 'Novo Nordisk Q4 FY25 Income Statement',
      period: 'in DKK',
      periodNote: '',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/novo-nordisk-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 197, titleSize: 117, titleWeight: 800, titleTextLength: 2500,
      periodX: 185, periodY: 276, periodSize: 40, periodWeight: 800,
      periodNoteX: -1000, periodNoteY: -1000,
      logoSvg, logoViewBox: '0 0 360 305', logoWidth: 360, logoHeight: 305,
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
      { key: 'ozempic', href: 'data/assets/raster-annotations/novo-nordisk/diabetes-care-products.png', x: 15, y: 465, width: 258, height: 58 },
      { key: 'victoza', href: 'data/assets/raster-annotations/novo-nordisk/victoza.png', x: 50, y: 525, width: 168, height: 58 },
      { key: 'insulin-products', href: 'data/assets/raster-annotations/novo-nordisk/insulin-products.png', x: 36, y: 708, width: 211, height: 112 },
      { key: 'wegovy', href: 'data/assets/raster-annotations/novo-nordisk/obesity-care-products.png', x: 299, y: 1036, width: 208, height: 49 },
      { key: 'saxenda', href: 'data/assets/raster-annotations/novo-nordisk/saxenda.png', x: 311, y: 1077, width: 188, height: 49 },
      { key: 'rare-disease-products', href: 'data/assets/raster-annotations/novo-nordisk/rare-disease-products.png', x: 289, y: 1198, width: 241, height: 107 },
    ],
    annotationsSvg: annotations('Glucagon-like', 'peptide-1'),
    layout: {
      scale: 4.15,
      nodes: {
        glp1: { x: 441, y: 452, width: 74, height: 158 },
        insulin: { x: 441, y: 759, width: 74, height: 59 },
        other_diabetes: { x: 441, y: 963, width: 74, height: 2 },
        diabetes_care: { x: 815, y: 570, width: 74, height: 215 },
        obesity_care: { x: 815, y: 1015, width: 74, height: 97 },
        rare_disease: { x: 815, y: 1241, width: 74, height: 23 },
        revenue: { x: 1189, y: 674, width: 74, height: 331 },
        gross_profit: { x: 1563, y: 572, width: 74, height: 267 },
        cost_of_sales: { x: 1563, y: 1051, width: 74, height: 64 },
        operating_profit: { x: 1937, y: 490, width: 74, height: 133 },
        operating_expenses: { x: 1937, y: 800, width: 74, height: 135 },
        net_profit: { x: 2311, y: 405, width: 74, height: 112 },
        other_income: { x: 2202, y: 566, width: 74, height: 10 },
        tax: { x: 2311, y: 711, width: 74, height: 30 },
        sales_distribution: { x: 2311, y: 918, width: 74, height: 67 },
        rnd: { x: 2311, y: 1114, width: 74, height: 61 },
        admin_other: { x: 2311, y: 1321, width: 74, height: 7 },
      },
      labels: {
        glp1: { blocks: [
          { x: 478, top: 364, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '(11%) Y/Y', size: 29, color: NOTE }] },
          { x: 422, top: 478, anchor: 'end', lines: [{ text: 'GLP-1', size: 40, weight: 700 }] },
        ] },
        diabetes_care: { blocks: [{ x: 852, top: 430, anchor: 'middle', lineGap: 8, lines: [{ text: 'Diabetes care', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '(12%) Y/Y', size: 29, color: NOTE }] }] },
        insulin: { blocks: [
          { x: 478, top: 670, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '(16%) Y/Y', size: 29, color: NOTE }] },
          { x: 422, top: 773, anchor: 'end', lines: [{ text: 'Insulin', size: 40, weight: 700 }] },
        ] },
        other_diabetes: { blocks: [
          { x: 478, top: 874, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '(18%) Y/Y', size: 29, color: NOTE }] },
          { x: 397, top: 949, anchor: 'end', lines: [{ text: 'Other diabetes', size: 40, weight: 700 }] },
        ] },
        obesity_care: { blocks: [
          { x: 852, top: 927, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+5% Y/Y', size: 29, color: NOTE }] },
          { x: 779, top: 1047, anchor: 'end', lines: [{ text: 'Obesity care', size: 40, weight: 700 }] },
        ] },
        rare_disease: { blocks: [
          { x: 852, top: 1153, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '(6%) Y/Y', size: 29, color: NOTE }] },
          { x: 779, top: 1236, anchor: 'end', lines: [{ text: 'Rare disease', size: 40, weight: 700 }] },
        ] },
        revenue: { blocks: [{ x: 1226, top: 532, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net sales', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '(8%) Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1600, top: 390, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '81% margin', size: 29, color: NOTE }, { text: '(4pp) Y/Y', size: 29, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1600, top: 1140, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 40, weight: 700 }, { text: '$value', size: 40 }] }] },
        operating_profit: { blocks: [{ x: 1974, top: 312, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '40% margin', size: 29, color: NOTE }, { text: '(3pp) Y/Y', size: 29, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1974, top: 958, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 700 }, { text: 'expenses', size: 40, weight: 700 }, { text: '$value', size: 40 }] }] },
        net_profit: { blocks: [{ x: 2418, top: 387, anchor: 'start', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '34% margin', size: 29, color: NOTE }, { text: '+1pp Y/Y', size: 29, color: NOTE }] }] },
        other_income: { blocks: [{ x: 2239, top: 595, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 30, weight: 700 }, { text: '$value', size: 30 }] }] },
        tax: { blocks: [{ x: RIGHT_X, top: 690, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 30, weight: 700 }, { text: '$value', size: 30 }] }] },
        sales_distribution: { blocks: [{ x: 2445, top: 887, anchor: 'start', lineGap: 8, lines: [{ text: 'Sales &', size: 30, weight: 700 }, { text: 'Distribution', size: 30, weight: 700 }, { text: '$value', size: 30 }, { text: '20% of revenue', size: 29, color: NOTE }, { text: '(2pp) Y/Y', size: 29, color: NOTE }] }] },
        rnd: { blocks: [{ x: 2445, top: 1106, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 30, weight: 700 }, { text: '$value', size: 30 }, { text: '19% of revenue', size: 29, color: NOTE }, { text: '+2pp Y/Y', size: 29, color: NOTE }] }] },
        admin_other: { blocks: [{ x: 2445, top: 1280, anchor: 'start', lineGap: 8, lines: [{ text: 'Admin', size: 30, weight: 700 }, { text: '& Other', size: 30, weight: 700 }, { text: '$value', size: 30 }] }] },
      },
    },
    nodes: [
      { id: 'glp1', col: 0, order: 0, type: 'source', label: 'GLP-1', value: 37.5, notes: ['(11%) Y/Y'] },
      { id: 'insulin', col: 0, order: 1, type: 'source', label: 'Insulin', value: 13.4, notes: ['(16%) Y/Y'] },
      { id: 'other_diabetes', col: 0, order: 2, type: 'source', label: 'Other diabetes', value: 0.4, notes: ['(18%) Y/Y'] },
      { id: 'diabetes_care', col: 1, order: 0, type: 'source', label: 'Diabetes care', value: 51.4, notes: ['(12%) Y/Y'] },
      { id: 'obesity_care', col: 1, order: 1, type: 'source', label: 'Obesity care', value: 22.4, notes: ['+5% Y/Y'] },
      { id: 'rare_disease', col: 1, order: 2, type: 'source', label: 'Rare disease', value: 5.3, notes: ['(6%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 79.1, notes: ['(8%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 64, notes: ['81% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 15.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 31.7, notes: ['40% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 32.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 26.9, notes: ['34% margin', '+1pp Y/Y'] },
      { id: 'other_income', col: 5, order: 1, type: 'profit', label: 'Other', value: 2.4 },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 7.3 },
      { id: 'sales_distribution', col: 5, order: 3, type: 'cost', label: ['Sales &', 'Distribution'], value: 15.9, notes: ['20% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 14.6, notes: ['19% of revenue', '+2pp Y/Y'] },
      { id: 'admin_other', col: 5, order: 5, type: 'cost', label: ['Admin', '& Other'], value: 1.7 },
    ],
    links: [
      { source: 'glp1', target: 'diabetes_care', value: 37.5, sourceWidth: 158, targetWidth: 155, y0: 531, y1: 647.5, linkTint: NAVY_LINK },
      { source: 'insulin', target: 'diabetes_care', value: 13.4, sourceWidth: 59, targetWidth: 58, y0: 788.5, y1: 754, linkTint: NAVY_LINK },
      { source: 'other_diabetes', target: 'diabetes_care', value: 0.4, sourceWidth: 2, targetWidth: 2, y0: 964, y1: 784, linkTint: NAVY_LINK },
      { source: 'diabetes_care', target: 'revenue', value: 51.4, sourceWidth: 215, targetWidth: 215, y0: 677.5, y1: 781.5, linkTint: NAVY_LINK },
      { source: 'obesity_care', target: 'revenue', value: 22.4, sourceWidth: 97, targetWidth: 94, y0: 1063.5, y1: 936, linkTint: NAVY_LINK },
      { source: 'rare_disease', target: 'revenue', value: 5.3, sourceWidth: 21, targetWidth: 22, y0: 1252.5, y1: 994, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 64, sourceWidth: 267, targetWidth: 267, y0: 807.5, y1: 705.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 15.1, sourceWidth: 64, targetWidth: 64, y0: 973, y1: 1083, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 31.7, sourceWidth: 133, targetWidth: 133, y0: 638.5, y1: 556.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 32.3, sourceWidth: 134, targetWidth: 135, y0: 772.5, y1: 867.5, linkTint: RED_LINK },
      // Net profit comprises DKK 24.5B carried from operating profit plus
      // DKK 2.4B of other income. Keep the source-measured ribbon geometry
      // explicit; its semantic value drives hover percentages (91.1% / 8.9%).
      { source: 'operating_profit', target: 'net_profit', value: 24.5, sourceWidth: 112, targetWidth: 112, y0: 546, y1: 461, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 7.3, sourceWidth: 30, targetWidth: 30, y0: 608, y1: 726, linkTint: RED_LINK, nodeHoverPercentDenominator: 'source' },
      { source: 'operating_expenses', target: 'sales_distribution', value: 15.9, sourceWidth: 67, targetWidth: 67, y0: 833.5, y1: 951.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 14.6, sourceWidth: 61, targetWidth: 57, y0: 897.5, y1: 1146.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'admin_other', value: 1.7, sourceWidth: 7, targetWidth: 7, y0: 931.5, y1: 1324.5, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 2.4, sourceWidth: 10, targetWidth: 10, y0: 571, y1: 512, linkTint: GREEN_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Ozempic', 'Victoza', 'Tresiba', 'Levemir', 'Wegovy', 'Saxenda', 'NovoSeven RT', 'novo nordisk'],
      zh: {
        name: '诺和诺德 · 2025 财年第四季度',
        meta: { title: '诺和诺德 2025 财年第四季度利润表', period: '单位：丹麦克朗', titleSize: 108, titleTextLength: 2200 },
        annotationsSvg: annotations('胰高血糖素样', '肽-1'),
        nodes: {
          glp1: { label: 'GLP-1', notes: ['同比 (11%)'] }, insulin: { label: '胰岛素', notes: ['同比 (16%)'] }, other_diabetes: { label: '其他糖尿病业务', notes: ['同比 (18%)'] }, diabetes_care: { label: '糖尿病护理', notes: ['同比 (12%)'] }, obesity_care: { label: '肥胖症护理', notes: ['同比 +5%'] }, rare_disease: { label: '罕见病', notes: ['同比 (6%)'] }, revenue: { label: '净销售额', notes: ['同比 (8%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 (4 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 40%', '同比 (3 个百分点)'] }, operating_expenses: { label: ['营业费用'] }, net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +1 个百分点'] }, other_income: { label: '其他' }, tax: { label: '税费' }, sales_distribution: { label: ['销售与', '分销'], notes: ['占收入 20%', '同比 (2 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 19%', '同比 +2 个百分点'] }, admin_other: { label: ['管理及其他'] },
        },
        layout: { labels: {
          diabetes_care: { blocks: [{ lines: [{ text: '糖尿病护理' }, { text: '$value' }, { text: '同比 (12%)' }] }] },
          insulin: { blocks: [{ lines: [{ text: '$value' }, { text: '同比 (16%)' }] }, { lines: [{ text: '胰岛素' }] }] },
          obesity_care: { blocks: [{ lines: [{ text: '$value' }, { text: '同比 +5%' }] }, { lines: [{ text: '肥胖症护理' }] }] },
          rare_disease: { blocks: [{ lines: [{ text: '$value' }, { text: '同比 (6%)' }] }] },
          revenue: { blocks: [{ lines: [{ text: '净销售额' }, { text: '$value' }, { text: '同比 (8%)' }] }] },
          gross_profit: { blocks: [{ lines: [{ text: '毛利润' }, { text: '$value' }, { text: '利润率 81%' }, { text: '同比 (4 个百分点)' }] }] },
          cost_of_sales: { blocks: [{ lines: [{ text: '销售成本' }, { text: '$value' }] }] },
          operating_profit: { blocks: [{ lines: [{ text: '营业利润' }, { text: '$value' }, { text: '利润率 40%' }, { text: '同比 (3 个百分点)' }] }] },
          operating_expenses: { blocks: [{ lines: [{ text: '营业费用' }, { text: '$value' }] }] },
          net_profit: { blocks: [{ lines: [{ text: '净利润' }, { text: '$value' }, { text: '利润率 34%' }, { text: '同比 +1 个百分点' }] }] },
          other_income: { blocks: [{ lines: [{ text: '其他' }, { text: '$value' }] }] }, tax: { blocks: [{ lines: [{ text: '税费' }, { text: '$value' }] }] },
          sales_distribution: { blocks: [{ lines: [{ text: '销售与' }, { text: '分销' }, { text: '$value' }, { text: '占收入 20%' }, { text: '同比 (2 个百分点)' }] }] },
          rnd: { blocks: [{ lines: [{ text: '研发' }, { text: '$value' }, { text: '占收入 19%' }, { text: '同比 +2 个百分点' }] }] },
          admin_other: { blocks: [{ lines: [{ text: '管理及其他' }, { text: '$value' }] }] },
        } },
      },
    },
  });
})();

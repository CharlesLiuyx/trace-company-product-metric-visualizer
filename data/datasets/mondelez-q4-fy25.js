/* Mondelēz International — Q4 FY25 income statement ($B).
 * Reconstructed from input/processed/mondelez-q4-fy25.png as a measured,
 * fixed-layout d3-sankey. The brand clusters are validated runtime crops. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const PURPLE = '#4b268a';
  const PURPLE_LINK = '#a497c4';
  const GREEN = '#2ba42a';
  const GREEN_LABEL = '#008f4c';
  const GREEN_LINK = '#9bd198';
  const RED = '#d90000';
  const RED_LABEL = '#9f1700';
  const RED_LINK = '#df8587';
  const NOTE = '#666666';
  const RIGHT_X = 2465;
  // The $32M Other-income flow is intentionally only three pixels tall. Its
  // label and a transparent hit area preserve a practical hover target across
  // the short source bar and connector without altering visible geometry.
  const otherIncomeHitArea = `
    <g class="sankey-interactive-annotation" data-node="other_income">
      <rect x="2188" y="290" width="147" height="36" fill="#ffffff" fill-opacity="0"/>
    </g>`;

  const labels = (zh) => {
    const rightX = zh ? 2420 : RIGHT_X;
    const text = zh ? {
      biscuits: ['饼干与', '烘焙零食'], chocolate: '巧克力', gum: '口香糖与糖果', beverages: '饮料', cheese: '奶酪与食品杂货',
      sales: '净销售额', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['营业', '费用'],
      net: '净利润', other: '其他', tax: '税费', interest: '利息', sga: '销售、一般及管理费用',
      yoy3: '同比 +3%', yoy17: '同比 +17%', yoy8: '同比 +8%', yoy10: '同比 +10%', yoy13: '同比 +13%', yoy9: '同比 +9%',
      margin28: '利润率 28%', margin9: '利润率 9%', margin6: '利润率 6%', pp10: '同比 (10 个百分点)', pp8: '同比 (8 个百分点)', pp12: '同比 (12 个百分点)',
    } : {
      biscuits: ['Biscuits &', 'Baked Snacks'], chocolate: 'Chocolate', gum: 'Gum & Candy', beverages: 'Beverages', cheese: 'Cheese & Grocery',
      sales: 'Net sales', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      net: 'Net profit', other: 'Other', tax: 'Tax', interest: 'Interest', sga: 'SG&A',
      yoy3: '+3% Y/Y', yoy17: '+17% Y/Y', yoy8: '+8% Y/Y', yoy10: '+10% Y/Y', yoy13: '+13% Y/Y', yoy9: '+9% Y/Y',
      margin28: '28% margin', margin9: '9% margin', margin6: '6% margin', pp10: '(10pp) Y/Y', pp8: '(8pp) Y/Y', pp12: '(12pp) Y/Y',
    };
    const source = (id, x, valueTop, nameTop, name, yoy, nameSize = 40) => ({
      blocks: [
        { x, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 38, weight: 400 }, { text: yoy, size: 28, weight: 400, color: NOTE }] },
        { x: 430, top: nameTop, anchor: 'end', lineGap: 5, lines: (Array.isArray(name) ? name : [name]).map((item) => ({ text: item, size: nameSize, weight: 800 })) },
      ],
    });
    return {
      biscuits_baked_snacks: source('biscuits_baked_snacks', 503, 429, 553, text.biscuits, text.yoy3),
      chocolate: source('chocolate', 503, 697, 820, text.chocolate, text.yoy17),
      gum_candy: source('gum_candy', 503, 923, 1013, text.gum, text.yoy8, 38),
      beverages: source('beverages', 503, 1069, 1148, text.beverages, text.yoy10, 38),
      cheese_grocery: source('cheese_grocery', 503, 1186, 1270, text.cheese, text.yoy13, 36),
      revenue: { blocks: [{ x: 970, top: 572, anchor: 'middle', lineGap: 10, lines: [{ text: text.sales, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.yoy9, size: 28, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1437, top: 382, anchor: 'middle', lineGap: 10, lines: [{ text: text.gross, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin28, size: 28, weight: 400, color: NOTE }, { text: text.pp10, size: 28, weight: 400, color: NOTE }] }] },
      cost_of_sales: { blocks: [{ x: 1437, top: 1154, anchor: 'middle', lineGap: 8, lines: [{ text: text.cost, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
      operating_profit: { blocks: [{ x: 1905, top: 271, anchor: 'middle', lineGap: 10, lines: [{ text: text.operating, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin9, size: 28, weight: 400, color: NOTE }, { text: text.pp8, size: 28, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1905, top: 815, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((item) => ({ text: item, size: 38, weight: 800 })), { text: '$value', size: 38, weight: 400 }] }] },
      other_income: { blocks: [{ x: 2224, top: 220, anchor: 'middle', lineGap: 7, lines: [{ text: text.other, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      net_profit: { blocks: [{ x: rightX, top: 278, anchor: 'start', lineGap: 10, lines: [{ text: text.net, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin6, size: 28, weight: 400, color: NOTE }, { text: text.pp12, size: 28, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: rightX, top: 540, anchor: 'start', lineGap: 7, lines: [{ text: text.tax, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      interest: { blocks: [{ x: rightX, top: 663, anchor: 'start', lineGap: 7, lines: [{ text: text.interest, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      sga: { blocks: [{ x: rightX, top: 905, anchor: 'start', lineGap: 7, lines: [...(zh ? ['销售、一般', '及管理费用'] : [text.sga]).map((item) => ({ text: item, size: zh ? 29 : 31, weight: 800 })), { text: '$value', size: 31, weight: 400 }] }] },
      other_operating_expenses: { blocks: [{ x: rightX, top: 1135, anchor: 'start', lineGap: 7, lines: [{ text: text.other, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mondelez-q4-fy25',
    name: 'Mondelēz · Q4 FY25',
    company: 'Mondelēz International',
    meta: {
      company: 'Mondelēz International', title: 'Mondelēz Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mondelez-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2240,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: otherIncomeHitArea,
    rasterAnnotations: [
      { key: 'mondelez-company-wordmark', href: 'data/assets/raster-annotations/mondelez/company-wordmark.png', x: 610, y: 245, width: 690, height: 220 },
      { key: 'oreo', href: 'data/assets/raster-annotations/mondelez/oreo.png', x: 0, y: 392, width: 174, height: 80 },
      { key: 'clif-bar', href: 'data/assets/raster-annotations/mondelez/clif-bar.png', x: 0, y: 469, width: 174, height: 70 },
      { key: 'chips-ahoy', href: 'data/assets/raster-annotations/mondelez/chips-ahoy.png', x: 0, y: 540, width: 156, height: 134 },
      { key: 'milka', href: 'data/assets/raster-annotations/mondelez/milka.png', x: 0, y: 706, width: 174, height: 86 },
      { key: 'cadbury', href: 'data/assets/raster-annotations/mondelez/cadbury.png', x: 0, y: 786, width: 174, height: 88 },
      { key: 'toblerone', href: 'data/assets/raster-annotations/mondelez/toblerone.png', x: 0, y: 870, width: 174, height: 84 },
      { key: 'sour-patch-kids', href: 'data/assets/raster-annotations/mondelez/sour-patch-kids.png', x: 0, y: 932, width: 160, height: 156 },
      { key: 'ritz', href: 'data/assets/raster-annotations/mondelez/ritz.png', x: 0, y: 1118, width: 160, height: 150 },
    ],
    layout: {
      scale: 30.4,
      nodes: {
        biscuits_baked_snacks: { x: 467, y: 520, width: 72, height: 143 }, chocolate: { x: 467, y: 787, width: 72, height: 115 }, gum_candy: { x: 467, y: 1012, width: 72, height: 33 }, beverages: { x: 467, y: 1158, width: 72, height: 9 }, cheese_grocery: { x: 467, y: 1275, width: 72, height: 21 },
        revenue: { x: 934, y: 713, width: 72, height: 320 }, gross_profit: { x: 1401, y: 563, width: 72, height: 90 }, cost_of_sales: { x: 1401, y: 907, width: 72, height: 228 },
        operating_profit: { x: 1869, y: 451, width: 72, height: 30 }, operating_expenses: { x: 1869, y: 730, width: 72, height: 60 }, other_income: { x: 2188, y: 308, width: 72, height: 3 },
        net_profit: { x: 2335, y: 324, width: 72, height: 21 }, tax: { x: 2335, y: 566, width: 72, height: 9 }, interest: { x: 2335, y: 694, width: 72, height: 3 }, sga: { x: 2335, y: 922, width: 72, height: 58 }, other_operating_expenses: { x: 2335, y: 1161, width: 72, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'biscuits_baked_snacks', col: 0, order: 0, type: 'source', label: ['Biscuits &', 'Baked Snacks'], value: 4.7, notes: ['+3% Y/Y'] }, { id: 'chocolate', col: 0, order: 1, type: 'source', label: 'Chocolate', value: 3.8, notes: ['+17% Y/Y'] }, { id: 'gum_candy', col: 0, order: 2, type: 'source', label: 'Gum & Candy', value: 1.1, notes: ['+8% Y/Y'] }, { id: 'beverages', col: 0, order: 3, type: 'source', label: 'Beverages', value: 0.3, notes: ['+10% Y/Y'] }, { id: 'cheese_grocery', col: 0, order: 4, type: 'source', label: 'Cheese & Grocery', value: 0.7, notes: ['+13% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 10.5, notes: ['+9% Y/Y'] }, { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.0, notes: ['28% margin', '(10pp) Y/Y'] }, { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.0, notes: ['9% margin', '(8pp) Y/Y'] }, { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.0, valueText: '($2.0B)' }, { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.032, valueText: '$32M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.7, notes: ['6% margin', '(12pp) Y/Y'] }, { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3 }, { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1 }, { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.9 }, { id: 'other_operating_expenses', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.1 },
    ],
    links: [
      { source: 'biscuits_baked_snacks', target: 'revenue', value: 4.7, sourceWidth: 143, targetWidth: 143, y0: 591.5, y1: 784.5 }, { source: 'chocolate', target: 'revenue', value: 3.8, sourceWidth: 115, targetWidth: 115, y0: 844.5, y1: 913.5 }, { source: 'gum_candy', target: 'revenue', value: 1.1, sourceWidth: 33, targetWidth: 33, y0: 1028.5, y1: 987 }, { source: 'beverages', target: 'revenue', value: 0.3, sourceWidth: 9, targetWidth: 9, y0: 1162.5, y1: 1008 }, { source: 'cheese_grocery', target: 'revenue', value: 0.7, sourceWidth: 20, targetWidth: 20, y0: 1285.5, y1: 1023 },
      { source: 'revenue', target: 'gross_profit', value: 3.0, sourceWidth: 92, targetWidth: 90, y0: 759, y1: 608, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 7.5, sourceWidth: 228, targetWidth: 228, y0: 919, y1: 1021 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.0, sourceWidth: 30, targetWidth: 30, y0: 578, y1: 466, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 2.0, sourceWidth: 60, targetWidth: 60, y0: 623, y1: 760 },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 20, targetWidth: 20, y0: 461, y1: 335, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 7, targetWidth: 9, y0: 474.5, y1: 570.5 }, { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 479.5, y1: 695.5 }, { source: 'other_income', target: 'net_profit', value: 0.032, sourceWidth: 3, targetWidth: 3, y0: 309.5, y1: 325.5, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.9, sourceWidth: 58, targetWidth: 58, y0: 759, y1: 951 }, { source: 'operating_expenses', target: 'other_operating_expenses', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 789, y1: 1162.5 },
    ],
    i18n: {
      zh: {
        name: '亿滋国际 · 2025 财年第四季度',
        meta: { title: '亿滋国际 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2240 },
        nodes: {
          biscuits_baked_snacks: { label: ['饼干与', '烘焙零食'], notes: ['同比 +3%'] }, chocolate: { label: '巧克力', notes: ['同比 +17%'] }, gum_candy: { label: '口香糖与糖果', notes: ['同比 +8%'] }, beverages: { label: '饮料', notes: ['同比 +10%'] }, cheese_grocery: { label: '奶酪与食品杂货', notes: ['同比 +13%'] }, revenue: { label: '净销售额', notes: ['同比 +9%'] }, gross_profit: { label: '毛利润', notes: ['利润率 28%', '同比 (10 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 (8 个百分点)'] }, operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (12 个百分点)'] }, tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用' }, other_operating_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

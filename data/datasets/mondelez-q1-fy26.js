/* Mondelēz International — Q1 FY26 income statement ($B).
 * Reconstructed from input/processed/mondelez-q1-fy26.png as a measured,
 * fixed-layout d3-sankey. Validated Q4 brand assets are reused. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const PURPLE = '#472380';
  const PURPLE_LINK = '#a595bf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2525;

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2265"
      data-link-anchor-y="345">
      <path d="M2157 325H2218C2264 325 2282 365 2336 365"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2194" y="266" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收入' : 'Other'}</text>
      <text x="2194" y="307" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$48M</text>
    </g>`;

  const labels = (zh) => {
    const rightX = zh ? 2530 : RIGHT_X;
    const text = zh ? {
      biscuits: ['饼干与', '烘焙零食'], chocolate: '巧克力', gum: '口香糖与糖果', beverages: '饮料', cheese: '奶酪与食品杂货',
      sales: '净销售额', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['营业', '费用'],
      net: '净利润', tax: '税费', interest: '利息', sga: '销售、一般及管理费用', other: '其他',
      yoy5: '同比 +5%', yoy13: '同比 +13%', yoy9: '同比 +9%', yoy7: '同比 (7%)', yoy14: '同比 +14%', yoy8: '同比 +8%',
      margin28: '利润率 28%', margin8: '利润率 8%', margin6: '利润率 6%', pp2: '同比 +2 个百分点', pp1: '同比 +1 个百分点',
    } : {
      biscuits: ['Biscuits &', 'Baked Snacks'], chocolate: 'Chocolate', gum: 'Gum & Candy', beverages: 'Beverages', cheese: 'Cheese & Grocery',
      sales: 'Net sales', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', interest: 'Interest', sga: 'SG&A', other: 'Other',
      yoy5: '+5% Y/Y', yoy13: '+13% Y/Y', yoy9: '+9% Y/Y', yoy7: '(7%) Y/Y', yoy14: '+14% Y/Y', yoy8: '+8% Y/Y',
      margin28: '28% margin', margin8: '8% margin', margin6: '6% margin', pp2: '+2pp Y/Y', pp1: '+1pp Y/Y',
    };
    const source = (x, valueTop, nameTop, name, yoy, nameSize = 40, nameX = 430) => ({
      blocks: [
        { x, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 38, weight: 400 }, { text: yoy, size: 28, weight: 400, color: NOTE }] },
        { x: nameX, top: nameTop, anchor: 'end', lineGap: 5, lines: (Array.isArray(name) ? name : [name]).map((item) => ({ text: item, size: nameSize, weight: 800 })) },
      ],
    });
    return {
      biscuits_baked_snacks: source(503, 426, 537, text.biscuits, text.yoy5),
      chocolate: source(503, 689, 806, text.chocolate, text.yoy13),
      gum_candy: source(503, 923, 1012, text.gum, text.yoy9, 38, 424),
      beverages: source(503, 1069, 1156, text.beverages, text.yoy7, 38),
      cheese_grocery: source(503, 1186, 1272, text.cheese, text.yoy14, 40),
      revenue: { blocks: [{ x: 970, top: 571, anchor: 'middle', lineGap: 10, lines: [{ text: text.sales, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.yoy8, size: 28, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1437, top: 398, anchor: 'middle', lineGap: 10, lines: [{ text: text.gross, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin28, size: 28, weight: 400, color: NOTE }, { text: text.pp2, size: 28, weight: 400, color: NOTE }] }] },
      cost_of_sales: { blocks: [{ x: 1437, top: 1136, anchor: 'middle', lineGap: 8, lines: [{ text: text.cost, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
      operating_profit: { blocks: [{ x: 1905, top: 283, anchor: 'middle', lineGap: 10, lines: [{ text: text.operating, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin8, size: 28, weight: 400, color: NOTE }, { text: text.pp1, size: 28, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1905, top: 804, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((item) => ({ text: item, size: 38, weight: 800 })), { text: '$value', size: 38, weight: 400 }] }] },
      other_income: { blocks: [] },
      net_profit: { blocks: [{ x: rightX, top: 317, anchor: 'middle', lineGap: 10, lines: [{ text: text.net, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin6, size: 28, weight: 400, color: NOTE }, { text: text.pp1, size: 28, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: rightX, top: 543, anchor: 'middle', lineGap: 7, lines: [{ text: text.tax, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      interest: { blocks: [{ x: rightX, top: 660, anchor: 'middle', lineGap: 7, lines: [{ text: text.interest, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      sga: { blocks: [{ x: rightX, top: 878, anchor: 'middle', lineGap: 7, lines: [...(zh ? ['销售、一般', '及管理费用'] : [text.sga]).map((item) => ({ text: item, size: zh ? 29 : 31, weight: 800 })), { text: '$value', size: 31, weight: 400 }] }] },
      other_operating_expenses: { blocks: [{ x: rightX, top: 1093, anchor: 'middle', lineGap: 7, lines: [{ text: text.other, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mondelez-q1-fy26',
    name: 'Mondelēz · Q1 FY26',
    company: 'Mondelēz International',
    meta: {
      company: 'Mondelēz International', title: 'Mondelēz Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mondelez-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2240,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: otherIncomeGuide(false),
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
      scale: 31,
      routes: { other_income: { x: 2218, y: 325, width: 0, height: 1 } },
      nodes: {
        biscuits_baked_snacks: { x: 467, y: 516, width: 72, height: 142 }, chocolate: { x: 467, y: 778, width: 72, height: 113 }, gum_candy: { x: 467, y: 1014, width: 72, height: 34 }, beverages: { x: 467, y: 1171, width: 72, height: 9 }, cheese_grocery: { x: 467, y: 1291, width: 72, height: 19 },
        revenue: { x: 934, y: 710, width: 72, height: 315 }, gross_profit: { x: 1401, y: 578, width: 72, height: 88 }, cost_of_sales: { x: 1401, y: 894, width: 72, height: 228 },
        operating_profit: { x: 1869, y: 461, width: 72, height: 25 }, operating_expenses: { x: 1869, y: 725, width: 72, height: 64 },
        net_profit: { x: 2335, y: 364, width: 72, height: 17 }, tax: { x: 2335, y: 576, width: 72, height: 9 }, interest: { x: 2335, y: 709, width: 72, height: 3 }, sga: { x: 2335, y: 886, width: 72, height: 62 }, other_operating_expenses: { x: 2335, y: 1128, width: 72, height: 3 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.048, valueText: '$48M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'biscuits_baked_snacks', col: 0, order: 0, type: 'source', label: ['Biscuits &', 'Baked Snacks'], value: 4.5, notes: ['+5% Y/Y'] },
      { id: 'chocolate', col: 0, order: 1, type: 'source', label: 'Chocolate', value: 3.6, notes: ['+13% Y/Y'] },
      { id: 'gum_candy', col: 0, order: 2, type: 'source', label: 'Gum & Candy', value: 1.1, notes: ['+9% Y/Y'] },
      { id: 'beverages', col: 0, order: 3, type: 'source', label: 'Beverages', value: 0.3, notes: ['(7%) Y/Y'] },
      { id: 'cheese_grocery', col: 0, order: 4, type: 'source', label: 'Cheese & Grocery', value: 0.6, notes: ['+14% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 10.1, notes: ['+8% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.8, notes: ['28% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, notes: ['8% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.0, valueText: '($2.0B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.6, notes: ['6% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.9 },
      { id: 'other_operating_expenses', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.1 },
    ],
    links: [
      { source: 'biscuits_baked_snacks', target: 'revenue', value: 4.5, sourceWidth: 142, targetWidth: 141, y0: 587, y1: 780.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'chocolate', target: 'revenue', value: 3.6, sourceWidth: 113, targetWidth: 112, y0: 834.5, y1: 907, sourceOrder: 0, targetOrder: 1 },
      { source: 'gum_candy', target: 'revenue', value: 1.1, sourceWidth: 34, targetWidth: 33, y0: 1031, y1: 979.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'beverages', target: 'revenue', value: 0.3, sourceWidth: 9, targetWidth: 9, y0: 1175.5, y1: 1000.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'cheese_grocery', target: 'revenue', value: 0.6, sourceWidth: 19, targetWidth: 20, y0: 1300.5, y1: 1015, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 2.8, sourceWidth: 88, targetWidth: 88, y0: 754, y1: 622, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.3, sourceWidth: 227, targetWidth: 228, y0: 911.5, y1: 1008, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, sourceWidth: 25, targetWidth: 25, y0: 590.5, y1: 473.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.0, sourceWidth: 63, targetWidth: 64, y0: 634.5, y1: 757, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.6, sourceWidth: 17, targetWidth: 17, y0: 469.5, y1: 372.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 5, targetWidth: 9, y0: 480.5, y1: 580.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 484.5, y1: 710.5, sourceOrder: 2, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.048, sourceWidth: 2, targetWidth: 2, y0: 325, y1: 365, sourceOrder: 0, targetOrder: 0, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.9, sourceWidth: 61, targetWidth: 62, y0: 755.5, y1: 917, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expenses', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 787.5, y1: 1129.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '亿滋国际 · 2026 财年第一季度',
        meta: { title: '亿滋国际 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2240 },
        annotationsSvg: otherIncomeGuide(true),
        nonNodeMetrics: { other_income: { label: '其他收入' } },
        nodes: {
          biscuits_baked_snacks: { label: ['饼干与', '烘焙零食'], notes: ['同比 +5%'] }, chocolate: { label: '巧克力', notes: ['同比 +13%'] }, gum_candy: { label: '口香糖与糖果', notes: ['同比 +9%'] }, beverages: { label: '饮料', notes: ['同比 (7%)'] }, cheese_grocery: { label: '奶酪与食品杂货', notes: ['同比 +14%'] }, revenue: { label: '净销售额', notes: ['同比 +8%'] }, gross_profit: { label: '毛利润', notes: ['利润率 28%', '同比 +2 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +1 个百分点'] }, operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用' }, other_operating_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

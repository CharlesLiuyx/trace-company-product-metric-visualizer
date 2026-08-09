/* Mondelēz International — Q2 FY26 income statement ($B).
 * Reconstructed from input/processed/mondelez-q2-fy26.png as a measured,
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
      data-link-anchor-x="2285"
      data-link-anchor-y="314">
      <path d="M2177 304H2238C2284 304 2302 323 2336 323"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2205" y="244" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收入' : 'Other'}</text>
      <text x="2205" y="285" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$44M</text>
    </g>`;

  const labels = (zh) => {
    const rightX = zh ? 2530 : RIGHT_X;
    const text = zh ? {
      biscuits: ['饼干与', '烘焙零食'], chocolate: '巧克力', gum: '口香糖与糖果', beverages: '饮料', cheese: '奶酪与食品杂货',
      sales: '净销售额', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['营业', '费用'],
      net: '净利润', tax: '税费', interest: '利息', sga: '销售、一般及管理费用', other: '其他',
      yoy3: '同比 +3%', yoy2: '同比 +2%', yoy12: '同比 +12%', yoy0: '同比 (0%)', yoy6: '同比 +6%', yoy4: '同比 +4%',
      margin43: '利润率 43%', margin21: '利润率 21%', margin17: '利润率 17%', pp10: '同比 +10 个百分点', pp8: '同比 +8 个百分点', pp9: '同比 +9 个百分点',
    } : {
      biscuits: ['Biscuits &', 'Baked Snacks'], chocolate: 'Chocolate', gum: 'Gum & Candy', beverages: 'Beverages', cheese: 'Cheese & Grocery',
      sales: 'Net sales', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', interest: 'Interest', sga: 'SG&A', other: 'Other',
      yoy3: '+3% Y/Y', yoy2: '+2% Y/Y', yoy12: '+12% Y/Y', yoy0: '(0%) Y/Y', yoy6: '+6% Y/Y', yoy4: '+4% Y/Y',
      margin43: '43% margin', margin21: '21% margin', margin17: '17% margin', pp10: '+10pp Y/Y', pp8: '+8pp Y/Y', pp9: '+9pp Y/Y',
    };
    const source = (x, valueTop, nameTop, name, yoy, nameSize = 40, nameX = 430) => ({
      blocks: [
        { x, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 38, weight: 400 }, { text: yoy, size: 28, weight: 400, color: NOTE }] },
        { x: nameX, top: nameTop, anchor: 'end', lineGap: 5, lines: (Array.isArray(name) ? name : [name]).map((item) => ({ text: item, size: nameSize, weight: 800 })) },
      ],
    });
    return {
      biscuits_baked_snacks: source(503, 429, 561, text.biscuits, text.yoy3),
      chocolate: source(503, 723, 839, text.chocolate, text.yoy2),
      gum_candy: source(503, 946, 1034, text.gum, text.yoy12, 38, 424),
      beverages: source(503, 1101, 1176, text.beverages, text.yoy0, 38),
      cheese_grocery: source(503, 1219, 1299, text.cheese, text.yoy6, 40),
      revenue: { blocks: [{ x: 970, top: 576, anchor: 'middle', lineGap: 10, lines: [{ text: text.sales, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.yoy4, size: 28, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1437, top: 389, anchor: 'middle', lineGap: 10, lines: [{ text: text.gross, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin43, size: 28, weight: 400, color: NOTE }, { text: text.pp10, size: 28, weight: 400, color: NOTE }] }] },
      cost_of_sales: { blocks: [{ x: 1437, top: 1160, anchor: 'middle', lineGap: 8, lines: [{ text: text.cost, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
      operating_profit: { blocks: [{ x: 1905, top: 263, anchor: 'middle', lineGap: 10, lines: [{ text: text.operating, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin21, size: 28, weight: 400, color: NOTE }, { text: text.pp8, size: 28, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1905, top: 881, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((item) => ({ text: item, size: 38, weight: 800 })), { text: '$value', size: 38, weight: 400 }] }] },
      other_income: { blocks: [] },
      net_profit: { blocks: [{ x: rightX, top: 301, anchor: 'middle', lineGap: 10, lines: [{ text: text.net, size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: text.margin17, size: 28, weight: 400, color: NOTE }, { text: text.pp9, size: 28, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: rightX, top: 567, anchor: 'middle', lineGap: 7, lines: [{ text: text.tax, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      interest: { blocks: [{ x: rightX, top: 682, anchor: 'middle', lineGap: 7, lines: [{ text: text.interest, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      sga: { blocks: [{ x: rightX, top: 947, anchor: 'middle', lineGap: 7, lines: [...(zh ? ['销售、一般', '及管理费用'] : [text.sga]).map((item) => ({ text: item, size: zh ? 29 : 31, weight: 800 })), { text: '$value', size: 31, weight: 400 }] }] },
      other_operating_expenses: { blocks: [{ x: rightX, top: 1178, anchor: 'middle', lineGap: 7, lines: [{ text: text.other, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mondelez-q2-fy26',
    name: 'Mondelēz · Q2 FY26',
    company: 'Mondelēz International',
    meta: {
      company: 'Mondelēz International', title: 'Mondelēz Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mondelez-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'mondelez-company-wordmark', href: 'data/assets/raster-annotations/mondelez/company-wordmark.png', x: 610, y: 258, width: 690, height: 220 },
      { key: 'oreo', href: 'data/assets/raster-annotations/mondelez/oreo.png', x: 0, y: 412, width: 174, height: 80 },
      { key: 'clif-bar', href: 'data/assets/raster-annotations/mondelez/clif-bar.png', x: 0, y: 488, width: 174, height: 70 },
      { key: 'chips-ahoy', href: 'data/assets/raster-annotations/mondelez/chips-ahoy.png', x: 0, y: 559, width: 156, height: 134 },
      { key: 'milka', href: 'data/assets/raster-annotations/mondelez/milka.png', x: 0, y: 731, width: 174, height: 86 },
      { key: 'cadbury', href: 'data/assets/raster-annotations/mondelez/cadbury.png', x: 0, y: 811, width: 174, height: 88 },
      { key: 'toblerone', href: 'data/assets/raster-annotations/mondelez/toblerone.png', x: 0, y: 895, width: 174, height: 84 },
      { key: 'sour-patch-kids', href: 'data/assets/raster-annotations/mondelez/sour-patch-kids.png', x: 0, y: 960, width: 160, height: 156 },
      { key: 'ritz', href: 'data/assets/raster-annotations/mondelez/ritz.png', x: 0, y: 1153, width: 160, height: 150 },
    ],
    layout: {
      scale: 37.2,
      routes: { other_income: { x: 2238, y: 304, width: 0, height: 1 } },
      nodes: {
        biscuits_baked_snacks: { x: 467, y: 520, width: 72, height: 176 }, chocolate: { x: 467, y: 813, width: 72, height: 101 }, gum_candy: { x: 467, y: 1038, width: 72, height: 39 }, beverages: { x: 467, y: 1193, width: 72, height: 8 }, cheese_grocery: { x: 467, y: 1313, width: 72, height: 22 },
        revenue: { x: 934, y: 717, width: 72, height: 350 }, gross_profit: { x: 1401, y: 566, width: 72, height: 150 }, cost_of_sales: { x: 1401, y: 947, width: 72, height: 199 },
        operating_profit: { x: 1869, y: 440, width: 72, height: 72 }, operating_expenses: { x: 1869, y: 787, width: 72, height: 75 },
        net_profit: { x: 2335, y: 322, width: 72, height: 57 }, tax: { x: 2335, y: 595, width: 72, height: 13 }, interest: { x: 2335, y: 716, width: 72, height: 1 }, sga: { x: 2335, y: 945, width: 72, height: 75 }, other_operating_expenses: { x: 2335, y: 1214, width: 72, height: 1 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.044, valueText: '$44M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'biscuits_baked_snacks', col: 0, order: 0, type: 'source', label: ['Biscuits &', 'Baked Snacks'], value: 4.7, notes: ['+3% Y/Y'] },
      { id: 'chocolate', col: 0, order: 1, type: 'source', label: 'Chocolate', value: 2.7, notes: ['+2% Y/Y'] },
      { id: 'gum_candy', col: 0, order: 2, type: 'source', label: 'Gum & Candy', value: 1.1, notes: ['+12% Y/Y'] },
      { id: 'beverages', col: 0, order: 3, type: 'source', label: 'Beverages', value: 0.2, notes: ['(0%) Y/Y'] },
      { id: 'cheese_grocery', col: 0, order: 4, type: 'source', label: 'Cheese & Grocery', value: 0.6, notes: ['+6% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 9.4, notes: ['+4% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.0, valueText: '$4.0B', notes: ['43% margin', '+10pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 5.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.9, notes: ['21% margin', '+8pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.0, valueText: '($2.0B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['17% margin', '+9pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 2.0, valueText: '($2.0B)' },
      { id: 'other_operating_expenses', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.039, valueText: '($39M)' },
    ],
    links: [
      { source: 'biscuits_baked_snacks', target: 'revenue', value: 4.7, sourceWidth: 176, targetWidth: 176, y0: 608, y1: 806, sourceOrder: 0, targetOrder: 0 },
      { source: 'chocolate', target: 'revenue', value: 2.7, sourceWidth: 101, targetWidth: 101, y0: 863.5, y1: 944.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'gum_candy', target: 'revenue', value: 1.1, sourceWidth: 39, targetWidth: 41, y0: 1057.5, y1: 1015.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'beverages', target: 'revenue', value: 0.2, sourceWidth: 8, targetWidth: 8, y0: 1197, y1: 1040, sourceOrder: 0, targetOrder: 3 },
      { source: 'cheese_grocery', target: 'revenue', value: 0.6, sourceWidth: 22, targetWidth: 22, y0: 1324, y1: 1055, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 4.0, sourceWidth: 149, targetWidth: 150, y0: 792.5, y1: 641, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 5.4, sourceWidth: 199, targetWidth: 199, y0: 967.5, y1: 1046.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.9, sourceWidth: 72, targetWidth: 72, y0: 602, y1: 476, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.0, sourceWidth: 77, targetWidth: 75, y0: 677.5, y1: 824.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 55, targetWidth: 55, y0: 467.5, y1: 350.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 15, targetWidth: 13, y0: 502.5, y1: 601.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 511, y1: 716.5, sourceOrder: 2, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.044, sourceWidth: 2, targetWidth: 2, y0: 304, y1: 323, sourceOrder: 0, targetOrder: 0, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 2.0, sourceWidth: 74, targetWidth: 75, y0: 824, y1: 982.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expenses', value: 0.039, sourceWidth: 1, targetWidth: 1, y0: 861.5, y1: 1214.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '亿滋国际 · 2026 财年第二季度',
        meta: { title: '亿滋国际 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 2240 },
        annotationsSvg: otherIncomeGuide(true),
        nonNodeMetrics: { other_income: { label: '其他收入' } },
        nodes: {
          biscuits_baked_snacks: { label: ['饼干与', '烘焙零食'], notes: ['同比 +3%'] }, chocolate: { label: '巧克力', notes: ['同比 +2%'] }, gum_candy: { label: '口香糖与糖果', notes: ['同比 +12%'] }, beverages: { label: '饮料', notes: ['同比 (0%)'] }, cheese_grocery: { label: '奶酪与食品杂货', notes: ['同比 +6%'] }, revenue: { label: '净销售额', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 +10 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 +8 个百分点'] }, operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +9 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用' }, other_operating_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

/* Kraft Heinz Q4 FY25 fixed-layout income statement, measured from
 * input/processed/kraft-heinz-q4-fy25.png. */
(function () {
  const NAVY = '#26457e';
  const NAVY_LINK = '#98a6c2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9acd99';
  const RED = '#d90000';
  const RED_LABEL = '#9e1706';
  const RED_LINK = '#e18484';
  const TITLE = '#15527a';
  const NOTE = '#686868';
  const BG = '#f2f2f2';
  const RIGHT_X = 2516;

  // The source draws Other as a micro-flow/leader rather than a visible node.
  // Keep the whole callout interactive so its label and guide line share the
  // same hover context as the underlying financial node (T12/T12a).
  const otherAnnotation = (isZh) => `
    <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other" data-link-denominator="net_profit" data-link-anchor-x="2300" data-link-anchor-y="398">
      <path d="M2206 415 H2288 C2308 415 2308 350 2325 350" fill="none" stroke="${GREEN_LINK}" stroke-width="2" stroke-linecap="butt"/>
      <rect x="2210" y="422" width="210" height="96" fill="transparent" pointer-events="all"/>
      <text x="2310" y="461" text-anchor="end" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${isZh ? '其他' : 'Other'}</text>
      <text x="2310" y="500" text-anchor="end" font-size="31" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  const data = {
    key: 'kraft-heinz-q4-fy25',
    name: 'Kraft Heinz · Q4 FY25',
    company: 'Kraft Heinz',
    meta: {
      company: 'Kraft Heinz', title: 'Kraft Heinz Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/kraft-heinz-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 126, titleWeight: 800, titleTextLength: 2470,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherAnnotation(false),
    rasterAnnotations: [
      { key: 'kraft-heinz-company-logo', href: 'data/assets/raster-annotations/kraft-heinz/company-logo.png', x: 650, y: 265, width: 605, height: 135 },
      { key: 'kraft-heinz-accelerate-sauces', href: 'data/assets/raster-annotations/kraft-heinz/accelerate-sauces.png', x: 10, y: 500, width: 195, height: 155 },
      { key: 'kraft-heinz-accelerate-home-bake', href: 'data/assets/raster-annotations/kraft-heinz/accelerate-home-bake.png', x: 50, y: 645, width: 115, height: 100 },
      { key: 'kraft-heinz-protect-products', href: 'data/assets/raster-annotations/kraft-heinz/protect-products.png', x: 70, y: 833, width: 150, height: 200 },
      { key: 'kraft-heinz-balance-products', href: 'data/assets/raster-annotations/kraft-heinz/balance-products.png', x: 124, y: 1114, width: 110, height: 128 },
    ],
    nodes: [
      { id: 'accelerate', col: 0, order: 0, type: 'source', label: 'Accelerate', value: 4.3, notes: ['(3%) Y/Y', 'Taste Elevation', 'Easy Ready Meals', 'Substantial Snacking'] },
      { id: 'protect', col: 0, order: 1, type: 'source', label: 'Protect', value: 0.8, notes: ['(3%) Y/Y', 'Desserts', 'Hydration'] },
      { id: 'balance', col: 0, order: 2, type: 'source', label: 'Balance', value: 1.2, notes: ['(5%) Y/Y', 'Cheese', 'Coffee', 'Meats', 'Other'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 6.4, notes: ['(4%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.1, notes: ['33% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 4.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.1, notes: ['17% margin', '+18pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.0 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.6, notes: ['10% margin', '(22pp) Y/Y'] },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 0.1, color: BG },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'interest', col: 4, order: 3, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 1.0, notes: ['15% of revenue', '+2pp Y/Y'] },
      { id: 'goodwill', col: 4, order: 5, type: 'cost', label: 'Goodwill', value: 0.005, valueText: '($5M)', notes: ['0% of revenue', '(1pp) Y/Y'], color: RED },
    ],
    links: [
      { source: 'accelerate', target: 'revenue', value: 4.3, sourceWidth: 210, targetWidth: 210, y0: 640, y1: 767, targetOrder: 0 },
      { source: 'protect', target: 'revenue', value: 0.8, sourceWidth: 39, targetWidth: 39, y0: 945.5, y1: 891.5, targetOrder: 1 },
      { source: 'balance', target: 'revenue', value: 1.2, sourceWidth: 60, targetWidth: 60, y0: 1176, y1: 940, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.1, sourceWidth: 100, targetWidth: 101, y0: 712, y1: 580.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 4.3, sourceWidth: 208, targetWidth: 207, y0: 866, y1: 983.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.1, sourceWidth: 52, targetWidth: 52, y0: 556, y1: 453, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.0, sourceWidth: 49, targetWidth: 49, y0: 605.5, y1: 739.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.6, sourceWidth: 32, targetWidth: 30, y0: 443, y1: 335, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 11, targetWidth: 12, y0: 464.5, y1: 607, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 9, targetWidth: 12, y0: 474.5, y1: 733, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.0, sourceWidth: 47, targetWidth: 48, y0: 738.5, y1: 930, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'goodwill', value: 0.005, sourceWidth: 2, targetWidth: 2, y0: 763, y1: 1162, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 48.3,
      nodes: {
        accelerate: { x: 466, y: 535, width: 72, height: 210 }, protect: { x: 466, y: 926, width: 72, height: 39 }, balance: { x: 466, y: 1146, width: 72, height: 60 },
        revenue: { x: 935, y: 660, width: 72, height: 310 }, gross_profit: { x: 1402, y: 530, width: 72, height: 101 }, cost_of_sales: { x: 1402, y: 880, width: 72, height: 207 },
        operating_profit: { x: 1868, y: 427, width: 72, height: 52 }, operating_expenses: { x: 1868, y: 715, width: 72, height: 49 },
        net_profit: { x: 2325, y: 320, width: 72, height: 30 }, other: { x: 2206, y: 413, width: 108, height: 4 }, tax: { x: 2325, y: 601, width: 83, height: 12 }, interest: { x: 2325, y: 727, width: 83, height: 12 }, sga: { x: 2325, y: 906, width: 83, height: 48 }, goodwill: { x: 2315, y: 1161, width: 93, height: 2 },
      },
      labels: {
        accelerate: { blocks: [{ x: 502, top: 441, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '(3%) Y/Y', size: 29, color: NOTE }] }, { x: 297, top: 561, anchor: 'middle', lineGap: 7, lines: [{ text: 'Accelerate', size: 40, weight: 800 }, { text: 'Taste Elevation', size: 29, color: NOTE }, { text: 'Easy Ready Meals', size: 29, color: NOTE }, { text: 'Substantial Snacking', size: 29, color: NOTE }] }] },
        protect: { blocks: [{ x: 502, top: 833, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '(3%) Y/Y', size: 29, color: NOTE }] }, { x: 297, top: 928, anchor: 'middle', lineGap: 7, lines: [{ text: 'Protect', size: 40, weight: 800 }, { text: 'Desserts', size: 29, color: NOTE }, { text: 'Hydration', size: 29, color: NOTE }] }] },
        balance: { blocks: [{ x: 502, top: 1058, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '(5%) Y/Y', size: 29, color: NOTE }] }, { x: 297, top: 1158, anchor: 'middle', lineGap: 7, lines: [{ text: 'Balance', size: 40, weight: 800 }, { text: 'Cheese', size: 29, color: NOTE }, { text: 'Coffee', size: 29, color: NOTE }, { text: 'Meats', size: 29, color: NOTE }, { text: 'Other', size: 29, color: NOTE }] }] },
        revenue: { blocks: [{ x: 971, top: 522, anchor: 'middle', lineGap: 12, lines: [{ text: 'Net sales', size: 40, weight: 800 }, { text: '$value', size: 40 }, { text: '(4%) Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1438, top: 349, anchor: 'middle', lineGap: 12, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '33% margin', size: 29, color: NOTE }, { text: '(2pp) Y/Y', size: 29, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1438, top: 1110, anchor: 'middle', lineGap: 12, lines: [{ text: 'Cost of sales', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
        operating_profit: { blocks: [{ x: 1904, top: 247, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '17% margin', size: 29, color: NOTE }, { text: '+18pp Y/Y', size: 29, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1904, top: 790, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
        net_profit: { blocks: [{ x: RIGHT_X, top: 292, anchor: 'middle', lineGap: 12, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '10% margin', size: 29, color: NOTE }, { text: '(22pp) Y/Y', size: 29, color: NOTE }] }] },
        other: { blocks: [] },
        tax: { blocks: [{ x: RIGHT_X, top: 577, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
        interest: { blocks: [{ x: RIGHT_X, top: 703, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 888, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '15% of revenue', size: 29, color: NOTE }, { text: '+2pp Y/Y', size: 29, color: NOTE }] }] },
        goodwill: { blocks: [{ x: RIGHT_X, top: 1118, anchor: 'middle', lineGap: 8, lines: [{ text: 'Goodwill', size: 31, weight: 800, color: RED_LABEL }, { text: '($5M)', size: 31, color: RED_LABEL }, { text: '0% of revenue', size: 29, color: NOTE }, { text: '(1pp) Y/Y', size: 29, color: NOTE }] }] },
      },
    },
    i18n: {
      zh: {
        name: '卡夫亨氏 · 2025 财年第四季度',
        meta: { title: '卡夫亨氏 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2100 },
        nodes: {
          accelerate: { label: '加速增长', notes: ['同比 (3%)', '风味提升', '便捷即食餐', '充饥零食'] }, protect: { label: '稳固基础', notes: ['同比 (3%)', '甜品', '补水饮品'] }, balance: { label: '平衡组合', notes: ['同比 (5%)', '奶酪', '咖啡', '肉制品', '其他'] }, revenue: { label: '净销售额', notes: ['同比 (4%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 33%', '同比 (2 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +18 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (22 个百分点)'] }, other: { label: '其他' }, tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用', notes: ['占收入 15%', '同比 +2 个百分点'] }, goodwill: { label: '商誉', notes: ['占收入 0%', '同比 (1 个百分点)'] },
        },
        layout: { labels: {
          accelerate: { blocks: [{ x: 502, top: 441, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '同比 (3%)', size: 29, color: NOTE }] }, { x: 297, top: 561, anchor: 'middle', lineGap: 7, lines: [{ text: '加速增长', size: 40, weight: 800 }, { text: '风味提升', size: 29, color: NOTE }, { text: '便捷即食餐', size: 29, color: NOTE }, { text: '充饥零食', size: 29, color: NOTE }] }] },
          protect: { blocks: [{ x: 502, top: 833, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '同比 (3%)', size: 29, color: NOTE }] }, { x: 297, top: 928, anchor: 'middle', lineGap: 7, lines: [{ text: '稳固基础', size: 40, weight: 800 }, { text: '甜品', size: 29, color: NOTE }, { text: '补水饮品', size: 29, color: NOTE }] }] },
          balance: { blocks: [{ x: 502, top: 1058, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '同比 (5%)', size: 29, color: NOTE }] }, { x: 297, top: 1158, anchor: 'middle', lineGap: 7, lines: [{ text: '平衡组合', size: 40, weight: 800 }, { text: '奶酪', size: 29, color: NOTE }, { text: '咖啡', size: 29, color: NOTE }, { text: '肉制品', size: 29, color: NOTE }, { text: '其他', size: 29, color: NOTE }] }] },
          revenue: { blocks: [{ x: 971, top: 522, anchor: 'middle', lineGap: 12, lines: [{ text: '净销售额', size: 40, weight: 800 }, { text: '$value', size: 40 }, { text: '同比 (4%)', size: 29, color: NOTE }] }] },
          gross_profit: { blocks: [{ x: 1438, top: 349, anchor: 'middle', lineGap: 12, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '利润率 33%', size: 29, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, color: NOTE }] }] },
          cost_of_sales: { blocks: [{ x: 1438, top: 1110, anchor: 'middle', lineGap: 12, lines: [{ text: '销售成本', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
          operating_profit: { blocks: [{ x: 1904, top: 247, anchor: 'middle', lineGap: 12, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '利润率 17%', size: 29, color: NOTE }, { text: '同比 +18 个百分点', size: 29, color: NOTE }] }] },
          operating_expenses: { blocks: [{ x: 1904, top: 790, anchor: 'middle', lineGap: 10, lines: [{ text: '运营费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
          net_profit: { blocks: [{ x: 2525, top: 292, anchor: 'middle', lineGap: 12, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '利润率 10%', size: 29, color: NOTE }, { text: '同比 (22 个百分点)', size: 29, color: NOTE }] }] },
          other: { blocks: [] },
          tax: { blocks: [{ x: RIGHT_X, top: 577, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] }, interest: { blocks: [{ x: RIGHT_X, top: 703, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
          sga: { blocks: [{ x: 2525, top: 888, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '管理费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '占收入 15%', size: 29, color: NOTE }, { text: '同比 +2 个百分点', size: 29, color: NOTE }] }] },
          goodwill: { blocks: [{ x: 2525, top: 1118, anchor: 'middle', lineGap: 8, lines: [{ text: '商誉', size: 31, weight: 800, color: RED_LABEL }, { text: '($5M)', size: 31, color: RED_LABEL }, { text: '占收入 0%', size: 29, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, color: NOTE }] }] },
        }, annotationsSvg: otherAnnotation(true) },
      },
    },
  };

  // Fixed-label inputs are baseline-oriented; this aligns their visible bboxes
  // to the measured reference anchors in both locales.
  for (const labels of [data.layout.labels, data.i18n.zh.layout.labels]) {
    for (const label of Object.values(labels)) {
      for (const block of label.blocks) block.top -= 10;
    }
  }

  window.DATASETS.push(data);
})();

/* Novartis Q1 FY26 income statement ($B), measured against the local reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#0664b0';
  const BLUE_LABEL = '#0564b0';
  const BLUE_LINK = '#88b2d3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2452;

  const otherOperatingIncomeGuide = `
    <g class="sankey-interactive-annotation" data-node="other_operating_income" data-link-numerator="other_operating_income" data-link-denominator="operating_expenses" data-link-anchor-x="1870" data-link-anchor-y="1015">
      <path d="M1740 1035H1814C1846 1035 1890 998 1934 998" fill="none" stroke="${GREEN_LINK}" stroke-width="3" stroke-linecap="butt"/>
      <rect x="1735" y="980" width="205" height="70" fill="transparent" pointer-events="all"/>
    </g>`;

  const zhLayout = {
    cardiovascular_renal_metabolic: { blocks: [
      { x: 476.5, top: 315, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (30%)', size: 28, color: NOTE }] },
      { x: 400, top: 400, anchor: 'end', lineGap: 4, lines: [{ text: '心血管、肾脏', size: 31, weight: 800 }, { text: '与代谢', size: 31, weight: 800 }] },
    ] },
    immunology: { blocks: [
      { x: 475.5, top: 521, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +2%', size: 28, color: NOTE }] },
      { x: 382, top: 621, anchor: 'end', lines: [{ text: '免疫学', size: 39, weight: 800 }] },
    ] },
    neuroscience: { blocks: [
      { x: 475.5, top: 714, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +20%', size: 28, color: NOTE }] },
      { x: 382, top: 803, anchor: 'end', lines: [{ text: '神经科学', size: 39, weight: 800 }] },
    ] },
    oncology: { blocks: [
      { x: 471.5, top: 889, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +39%', size: 28, color: NOTE }] },
      { x: 342, top: 983, anchor: 'end', lines: [{ text: '肿瘤学', size: 39, weight: 800 }] },
    ] },
    promoted_brands: { blocks: [{ x: 842, top: 445, anchor: 'middle', lineGap: 8, lines: [{ text: '重点推广品牌', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +8%', size: 28, color: NOTE }] }] },
    established_brands: { blocks: [{ x: 842, top: 1243, anchor: 'middle', lineGap: 8, lines: [{ text: '成熟品牌', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 (20%)', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1213.5, top: 531, anchor: 'middle', lineGap: 8, lines: [{ text: '净销售额', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 (1%)', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1592.5, top: 410, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 77%', size: 28, color: NOTE }, { text: '同比 +13 个百分点', size: 28, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1598.5, top: 1255, anchor: 'middle', lineGap: 6, lines: [{ text: '销售成本', size: 35, weight: 800 }, { text: '$value', size: 35 }] }] },
    other_gross_reconciliation: { blocks: [{ x: 1466, top: 985, anchor: 'middle', lineGap: 6, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    operating_profit: { blocks: [{ x: 1969.5, top: 319, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 32%', size: 28, color: NOTE }, { text: '同比 +11 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1981.5, top: 1020, anchor: 'middle', lineGap: 6, lines: [{ text: '营业', size: 39, weight: 800 }, { text: '费用', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    other_operating_income: { blocks: [{ x: 1778, top: 1052, anchor: 'middle', lineGap: 6, lines: [{ text: '其他', size: 37, weight: 800 }, { text: '$value', size: 35 }] }] },
    net_profit: { blocks: [{ x: 2400, top: 371, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 24%', size: 28, color: NOTE }, { text: '同比 +7%', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 661, anchor: 'start', lineGap: 7, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    other_expenses: { blocks: [{ x: RIGHT_X, top: 756, anchor: 'start', lineGap: 7, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 919, anchor: 'start', lineGap: 7, lines: [{ text: '销售、一般及', size: 31, weight: 800 }, { text: '行政费用', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 24%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 27, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 1180, anchor: 'start', lineGap: 7, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 21%', size: 28, color: NOTE }, { text: '同比 +3 个百分点', size: 27, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'novartis-q1-fy26', name: 'Novartis · Q1 FY26', company: 'Novartis',
    meta: {
      company: 'Novartis', title: 'Novartis Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Quarter ended Mar. 31, 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/novartis-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2250,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: otherOperatingIncomeGuide,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/novartis/q1-fy26/company-wordmark.png', x: 650, y: 238, width: 725, height: 145 },
      { key: 'cardiovascular-entresto', href: 'data/assets/raster-annotations/novartis/q1-fy26/cardiovascular-entresto.png', x: 142, y: 498, width: 196, height: 70 },
      { key: 'immunology-cosentyx', href: 'data/assets/raster-annotations/novartis/q1-fy26/immunology-cosentyx.png', x: 152, y: 667, width: 176, height: 74 },
      { key: 'neuroscience-kesimpta', href: 'data/assets/raster-annotations/novartis/q1-fy26/neuroscience-kesimpta.png', x: 152, y: 844, width: 176, height: 64 },
      { key: 'oncology-kisqali', href: 'data/assets/raster-annotations/novartis/q1-fy26/oncology-kisqali.png', x: 155, y: 1030, width: 190, height: 60 },
    ],
    layout: {
      scale: 1,
      nodes: {
        cardiovascular_renal_metabolic: { x: 436, y: 413, width: 72, height: 54 }, immunology: { x: 436, y: 609, width: 72, height: 77 }, neuroscience: { x: 436, y: 803, width: 72, height: 48 }, oncology: { x: 436, y: 977, width: 72, height: 125 },
        promoted_brands: { x: 810, y: 589, width: 72, height: 307 }, established_brands: { x: 810, y: 1117, width: 72, height: 102 }, revenue: { x: 1184, y: 673, width: 72, height: 412 },
        gross_profit: { x: 1557, y: 589, width: 72, height: 315 }, cost_of_sales: { x: 1557, y: 1123, width: 72, height: 108 }, other_gross_reconciliation: { x: 1431, y: 959, width: 72, height: 11 },
        operating_profit: { x: 1934, y: 500, width: 72, height: 133 }, operating_expenses: { x: 1934, y: 814, width: 72, height: 184 }, other_operating_income: { x: 1814, y: 1035, width: 0, height: 0 },
        net_profit: { x: 2304, y: 379, width: 72, height: 98 }, tax: { x: 2304, y: 683, width: 72, height: 20 }, other_expenses: { x: 2304, y: 783, width: 72, height: 10 }, sga: { x: 2304, y: 930, width: 72, height: 98 }, rnd: { x: 2304, y: 1191, width: 72, height: 84 },
      },
      labels: {
        cardiovascular_renal_metabolic: { blocks: [{ x: 476.5, top: 315, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '(30%) Y/Y', size: 28, color: NOTE }] }, { x: 400, top: 400, anchor: 'end', lineGap: 4, lines: [{ text: 'Cardiovascular,', size: 40, weight: 800 }, { text: 'renal & metabolic', size: 40, weight: 800 }] }] },
        immunology: { blocks: [{ x: 475.5, top: 521, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+2% Y/Y', size: 28, color: NOTE }] }, { x: 382, top: 621, anchor: 'end', lines: [{ text: 'Immunology', size: 39, weight: 800 }] }] },
        neuroscience: { blocks: [{ x: 475.5, top: 714, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+20% Y/Y', size: 28, color: NOTE }] }, { x: 382, top: 803, anchor: 'end', lines: [{ text: 'Neuroscience', size: 40, weight: 800 }] }] },
        oncology: { blocks: [{ x: 471.5, top: 889, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+39% Y/Y', size: 28, color: NOTE }] }, { x: 342, top: 983, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] }] },
        promoted_brands: { blocks: [{ x: 842, top: 445, anchor: 'middle', lineGap: 8, lines: [{ text: 'Promoted brands', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+8% Y/Y', size: 28, color: NOTE }] }] },
        established_brands: { blocks: [{ x: 842, top: 1243, anchor: 'middle', lineGap: 8, lines: [{ text: 'Established brands', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '(20%) Y/Y', size: 28, color: NOTE }] }] },
        revenue: { blocks: [{ x: 1213.5, top: 531, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net Sales', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '(1%) Y/Y', size: 28, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1592.5, top: 410, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '77% margin', size: 28, color: NOTE }, { text: '+13pp Y/Y', size: 28, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1598.5, top: 1255, anchor: 'middle', lineGap: 6, lines: [{ text: 'Cost of sales', size: 35, weight: 800 }, { text: '$value', size: 35 }] }] },
        other_gross_reconciliation: { blocks: [{ x: 1466, top: 985, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        operating_profit: { blocks: [{ x: 1969.5, top: 319, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '32% margin', size: 28, color: NOTE }, { text: '+11pp Y/Y', size: 28, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1981.5, top: 1020, anchor: 'middle', lineGap: 6, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        other_operating_income: { blocks: [{ x: 1778, top: 1052, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 37, weight: 800 }, { text: '$value', size: 35 }] }] },
        net_profit: { blocks: [{ x: 2399, top: 371, anchor: 'start', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '24% margin', size: 28, color: NOTE }, { text: '+7% Y/Y', size: 28, color: NOTE }] }] },
        tax: { blocks: [{ x: RIGHT_X, top: 661, anchor: 'start', lineGap: 7, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        other_expenses: { blocks: [{ x: RIGHT_X, top: 756, anchor: 'start', lineGap: 7, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 919, anchor: 'start', lineGap: 7, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '24% of revenue', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 27, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_X, top: 1180, anchor: 'start', lineGap: 7, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '21% of revenue', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 27, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'cardiovascular_renal_metabolic', col: 0, order: 0, type: 'source', label: ['Cardiovascular,', 'renal & metabolic'], value: 1.8, notes: ['(30%) Y/Y'] },
      { id: 'immunology', col: 0, order: 1, type: 'source', label: 'Immunology', value: 2.5, notes: ['+2% Y/Y'] },
      { id: 'neuroscience', col: 0, order: 2, type: 'source', label: 'Neuroscience', value: 1.6, notes: ['+20% Y/Y'] },
      { id: 'oncology', col: 0, order: 3, type: 'source', label: 'Oncology', value: 4.0, notes: ['+39% Y/Y'] },
      { id: 'promoted_brands', col: 1, order: 0, type: 'hub', label: 'Promoted brands', value: 9.8, notes: ['+8% Y/Y'] },
      { id: 'established_brands', col: 1, order: 1, type: 'source', label: 'Established brands', value: 3.3, notes: ['(20%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net Sales', value: 13.1, notes: ['(1%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.1, notes: ['77% margin', '+13pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.5 },
      { id: 'other_gross_reconciliation', col: 3, order: 2, type: 'profit', label: 'Other', value: 0.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.2, notes: ['32% margin', '+11pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.9 },
      { id: 'other_operating_income', col: 4, order: 2, type: 'profit', label: 'Other', value: 0.1, color: BG, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.2, notes: ['24% margin', '+7% Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.7 }, { id: 'other_expenses', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.4 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 3.1, notes: ['24% of revenue', '+1pp Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.7, notes: ['21% of revenue', '+3pp Y/Y'] },
    ],
    links: [
      { source: 'cardiovascular_renal_metabolic', target: 'promoted_brands', value: 1.8, sourceWidth: 54, targetWidth: 54, y0: 440, y1: 616, sourceOrder: 0, targetOrder: 0 },
      { source: 'immunology', target: 'promoted_brands', value: 2.5, sourceWidth: 77, targetWidth: 77, y0: 647.5, y1: 681.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'neuroscience', target: 'promoted_brands', value: 1.6, sourceWidth: 48, targetWidth: 48, y0: 827, y1: 744, sourceOrder: 0, targetOrder: 2 },
      { source: 'oncology', target: 'promoted_brands', value: 4.0, sourceWidth: 125, targetWidth: 128, y0: 1039.5, y1: 832, sourceOrder: 0, targetOrder: 3 },
      { source: 'promoted_brands', target: 'revenue', value: 9.8, sourceWidth: 307, targetWidth: 309, y0: 742.5, y1: 827.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'established_brands', target: 'revenue', value: 3.3, sourceWidth: 102, targetWidth: 102, y0: 1168, y1: 1034, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 9.6, sourceWidth: 303, targetWidth: 304, y0: 824.5, y1: 741, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.5, sourceWidth: 109, targetWidth: 108, y0: 1030.5, y1: 1177, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_gross_reconciliation', target: 'gross_profit', value: 0.4, sourceWidth: 11, targetWidth: 11, y0: 964.5, y1: 898.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.2, sourceWidth: 133, targetWidth: 133, y0: 655.5, y1: 566.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.9, sourceWidth: 182, targetWidth: 184, y0: 813, y1: 906, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.2, sourceWidth: 98, targetWidth: 98, y0: 549, y1: 428, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 22, targetWidth: 20, y0: 609, y1: 693, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expenses', value: 0.4, sourceWidth: 12, targetWidth: 10, y0: 626, y1: 788, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.1, sourceWidth: 100, targetWidth: 98, y0: 864, y1: 979, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.7, sourceWidth: 84, targetWidth: 84, y0: 956, y1: 1233, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_operating_income', target: 'operating_expenses', value: 0.1, interactionOnly: true, sourceOrder: 0, targetOrder: 1 },
    ],
    i18n: {
      zh: {
        name: '诺华 · 2026 财年第一季度',
        meta: { title: '诺华 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度', titleTextLength: 1900 },
        nodes: {
          cardiovascular_renal_metabolic: { label: ['心血管、肾脏', '与代谢'], notes: ['同比 (30%)'] }, immunology: { label: '免疫学', notes: ['同比 +2%'] }, neuroscience: { label: '神经科学', notes: ['同比 +20%'] }, oncology: { label: '肿瘤学', notes: ['同比 +39%'] }, promoted_brands: { label: '重点推广品牌', notes: ['同比 +8%'] }, established_brands: { label: '成熟品牌', notes: ['同比 (20%)'] }, revenue: { label: '净销售额', notes: ['同比 (1%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 77%', '同比 +13 个百分点'] }, cost_of_sales: { label: '销售成本' }, other_gross_reconciliation: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +11 个百分点'] }, operating_expenses: { label: '营业费用' }, other_operating_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 24%', '同比 +7%'] }, tax: { label: '税费' }, other_expenses: { label: '其他' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 +1 个百分点'] }, rnd: { label: '研发', notes: ['占收入 21%', '同比 +3 个百分点'] },
        },
        layout: { labels: zhLayout },
      },
    },
  });
})();

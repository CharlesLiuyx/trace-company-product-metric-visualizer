/* Novartis Q4 FY25 income statement ($B), measured against the local reference. */
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
  const RIGHT_X = 2440;

  const zhLayout = {
    cardiovascular_renal_metabolic: { blocks: [
      { x: 476.5, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 (33%)', size: 28, color: NOTE }] },
      { x: 400, top: 388, anchor: 'end', lineGap: 4, lines: [{ text: '心血管、肾脏', size: 31, weight: 800 }, { text: '与代谢', size: 31, weight: 800 }] },
    ] },
    immunology: { blocks: [
      { x: 473.5, top: 496, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +13%', size: 28, color: NOTE }] },
      { x: 375, top: 589, anchor: 'end', lines: [{ text: '免疫学', size: 39, weight: 800 }] },
    ] },
    neuroscience: { blocks: [
      { x: 473.5, top: 718, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +26%', size: 28, color: NOTE }] },
      { x: 382, top: 793, anchor: 'end', lines: [{ text: '神经科学', size: 39, weight: 800 }] },
    ] },
    oncology: { blocks: [
      { x: 470.5, top: 889, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '同比 +11%', size: 28, color: NOTE }] },
      { x: 341, top: 986, anchor: 'end', lines: [{ text: '肿瘤学', size: 39, weight: 800 }] },
    ] },
    promoted_brands: { blocks: [{ x: 843, top: 460, anchor: 'middle', lineGap: 8, lines: [{ text: '重点推广品牌', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +3%', size: 28, color: NOTE }] }] },
    established_brands: { blocks: [{ x: 843, top: 1235, anchor: 'middle', lineGap: 8, lines: [{ text: '成熟品牌', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 (3%)', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1217, top: 545, anchor: 'middle', lineGap: 8, lines: [{ text: '净销售额', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +1%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1590.5, top: 418, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 77%', size: 28, color: NOTE }, { text: '同比 +13 个百分点', size: 28, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1590.5, top: 1242, anchor: 'middle', lineGap: 6, lines: [{ text: '销售成本', size: 35, weight: 800 }, { text: '$value', size: 35 }] }] },
    other_gross_reconciliation: { blocks: [{ x: 1477, top: 989, anchor: 'middle', lineGap: 6, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    operating_profit: { blocks: [{ x: 1964.5, top: 334, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 27%', size: 28, color: NOTE }, { text: '同比 +6 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1964.5, top: 1028, anchor: 'middle', lineGap: 6, lines: [{ text: '营业费用', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 398, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 18%', size: 28, color: NOTE }, { text: '同比 +1%', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 669, anchor: 'start', lineGap: 7, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    other_expenses: { blocks: [{ x: RIGHT_X, top: 785, anchor: 'start', lineGap: 7, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 975, anchor: 'start', lineGap: 7, lines: [{ text: '销售、一般及', size: 31, weight: 800 }, { text: '行政费用', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 26%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 27, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 1220, anchor: 'start', lineGap: 7, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 24%', size: 28, color: NOTE }, { text: '同比 +6 个百分点', size: 27, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'novartis-q4-fy25', name: 'Novartis · Q4 FY25', company: 'Novartis',
    meta: {
      company: 'Novartis', title: 'Novartis Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Quarter ended Dec. 31, 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/novartis-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2250,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/novartis/company-wordmark.png', x: 650, y: 238, width: 725, height: 145 },
      { key: 'cardiovascular-entresto', href: 'data/assets/raster-annotations/novartis/cardiovascular-entresto.png', x: 142, y: 483, width: 196, height: 70 },
      { key: 'immunology-cosentyx', href: 'data/assets/raster-annotations/novartis/immunology-cosentyx.png', x: 152, y: 652, width: 176, height: 74 },
      { key: 'neuroscience-kesimpta', href: 'data/assets/raster-annotations/novartis/neuroscience-kesimpta.png', x: 152, y: 851, width: 176, height: 64 },
      { key: 'oncology-kisqali', href: 'data/assets/raster-annotations/novartis/oncology-kisqali.png', x: 155, y: 1052, width: 190, height: 80 },
    ],
    layout: {
      scale: 1,
      nodes: {
        cardiovascular_renal_metabolic: { x: 434, y: 402, width: 72, height: 47 }, immunology: { x: 434, y: 595, width: 72, height: 83 }, neuroscience: { x: 434, y: 818, width: 72, height: 49 }, oncology: { x: 434, y: 988, width: 72, height: 129 },
        promoted_brands: { x: 808, y: 603, width: 72, height: 310 }, established_brands: { x: 808, y: 1117, width: 72, height: 95 }, revenue: { x: 1182, y: 688, width: 72, height: 406 },
        gross_profit: { x: 1555, y: 598, width: 72, height: 312 }, cost_of_sales: { x: 1555, y: 1107, width: 72, height: 110 }, other_gross_reconciliation: { x: 1442, y: 953, width: 72, height: 15 },
        operating_profit: { x: 1929, y: 514, width: 72, height: 109 }, operating_expenses: { x: 1929, y: 804, width: 72, height: 202 },
        net_profit: { x: 2302, y: 424, width: 72, height: 72 }, tax: { x: 2302, y: 691, width: 72, height: 24 }, other_expenses: { x: 2302, y: 813, width: 72, height: 11 }, sga: { x: 2302, y: 975, width: 72, height: 103 }, rnd: { x: 2302, y: 1220, width: 72, height: 96 },
      },
      labels: {
        cardiovascular_renal_metabolic: { blocks: [{ x: 476.5, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '(33%) Y/Y', size: 28, color: NOTE }] }, { x: 400, top: 388, anchor: 'end', lineGap: 4, lines: [{ text: 'Cardiovascular,', size: 40, weight: 800 }, { text: 'renal & metabolic', size: 40, weight: 800 }] }] },
        immunology: { blocks: [{ x: 473.5, top: 496, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+13% Y/Y', size: 28, color: NOTE }] }, { x: 375, top: 606, anchor: 'end', lines: [{ text: 'Immunology', size: 39, weight: 800 }] }] },
        neuroscience: { blocks: [{ x: 473.5, top: 718, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+26% Y/Y', size: 28, color: NOTE }] }, { x: 382, top: 813, anchor: 'end', lines: [{ text: 'Neuroscience', size: 40, weight: 800 }] }] },
        oncology: { blocks: [{ x: 470.5, top: 889, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40 }, { text: '+11% Y/Y', size: 28, color: NOTE }] }, { x: 341, top: 1004, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] }] },
        promoted_brands: { blocks: [{ x: 839, top: 449, anchor: 'middle', lineGap: 8, lines: [{ text: 'Promoted brands', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+3% Y/Y', size: 28, color: NOTE }] }] },
        established_brands: { blocks: [{ x: 839, top: 1225, anchor: 'middle', lineGap: 8, lines: [{ text: 'Established brands', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '(3%) Y/Y', size: 28, color: NOTE }] }] },
        revenue: { blocks: [{ x: 1210.5, top: 534, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net Sales', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+1% Y/Y', size: 28, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1590.5, top: 407, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '77% margin', size: 28, color: NOTE }, { text: '+13pp Y/Y', size: 28, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1596.5, top: 1233, anchor: 'middle', lineGap: 6, lines: [{ text: 'Cost of sales', size: 35, weight: 800 }, { text: '$value', size: 35 }] }] },
        other_gross_reconciliation: { blocks: [{ x: 1479, top: 980, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        operating_profit: { blocks: [{ x: 1964.5, top: 324, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '27% margin', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 28, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1976.5, top: 1019, anchor: 'middle', lineGap: 6, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
        net_profit: { blocks: [{ x: 2397, top: 385, anchor: 'start', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '18% margin', size: 28, color: NOTE }, { text: '+1% Y/Y', size: 28, color: NOTE }] }] },
        tax: { blocks: [{ x: 2450, top: 661, anchor: 'start', lineGap: 7, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] }, other_expenses: { blocks: [{ x: 2450, top: 776, anchor: 'start', lineGap: 7, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
        sga: { blocks: [{ x: 2406, top: 965, anchor: 'start', lineGap: 7, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '26% of revenue', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 27, color: NOTE }] }] },
        rnd: { blocks: [{ x: 2416, top: 1210, anchor: 'start', lineGap: 7, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '24% of revenue', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 27, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'cardiovascular_renal_metabolic', col: 0, order: 0, type: 'source', label: ['Cardiovascular,', 'renal & metabolic'], value: 1.6, notes: ['(33%) Y/Y'] },
      { id: 'immunology', col: 0, order: 1, type: 'source', label: 'Immunology', value: 2.7, notes: ['+13% Y/Y'] },
      { id: 'neuroscience', col: 0, order: 2, type: 'source', label: 'Neuroscience', value: 1.6, notes: ['+26% Y/Y'] },
      { id: 'oncology', col: 0, order: 3, type: 'source', label: 'Oncology', value: 4.3, notes: ['+11% Y/Y'] },
      { id: 'promoted_brands', col: 1, order: 0, type: 'hub', label: 'Promoted brands', value: 10.2, notes: ['+3% Y/Y'] },
      { id: 'established_brands', col: 1, order: 1, type: 'source', label: 'Established brands', value: 3.1, notes: ['(3%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net Sales', value: 13.3, notes: ['+1% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.2, notes: ['77% margin', '+13pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.6 },
      { id: 'other_gross_reconciliation', col: 3, order: 2, type: 'profit', label: 'Other', value: 0.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.6, notes: ['27% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.6 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.4, notes: ['18% margin', '+1% Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 }, { id: 'other_expenses', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.4 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 3.4, notes: ['26% of revenue', '+2pp Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 3.2, notes: ['24% of revenue', '+6pp Y/Y'] },
    ],
    links: [
      { source: 'cardiovascular_renal_metabolic', target: 'promoted_brands', value: 1.6, sourceWidth: 47, targetWidth: 47, y0: 425.5, y1: 626.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'immunology', target: 'promoted_brands', value: 2.7, sourceWidth: 83, targetWidth: 83, y0: 636.5, y1: 691.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'neuroscience', target: 'promoted_brands', value: 1.6, sourceWidth: 49, targetWidth: 49, y0: 842.5, y1: 757.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'oncology', target: 'promoted_brands', value: 4.3, sourceWidth: 129, targetWidth: 131, y0: 1052.5, y1: 847.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'promoted_brands', target: 'revenue', value: 10.2, sourceWidth: 310, targetWidth: 310, y0: 758, y1: 843, sourceOrder: 0, targetOrder: 0 },
      { source: 'established_brands', target: 'revenue', value: 3.1, sourceWidth: 95, targetWidth: 95, y0: 1164.5, y1: 1045.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 9.7, sourceWidth: 294, targetWidth: 295, y0: 835, y1: 745.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.6, sourceWidth: 111, targetWidth: 109, y0: 1037.5, y1: 1161.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_gross_reconciliation', target: 'gross_profit', value: 0.5, sourceWidth: 15, targetWidth: 17, y0: 960.5, y1: 901.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.6, sourceWidth: 109, targetWidth: 109, y0: 652.5, y1: 568.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.6, sourceWidth: 202, targetWidth: 200, y0: 808, y1: 905, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.4, sourceWidth: 70, targetWidth: 72, y0: 549, y1: 460, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 22, targetWidth: 24, y0: 595, y1: 703, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expenses', value: 0.4, sourceWidth: 17, targetWidth: 11, y0: 614.5, y1: 818.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.4, sourceWidth: 108, targetWidth: 103, y0: 858, y1: 1026.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.2, sourceWidth: 94, targetWidth: 96, y0: 959, y1: 1268, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '诺华 · 2025 财年第四季度',
        meta: { title: '诺华 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleTextLength: 1900 },
        nodes: {
          cardiovascular_renal_metabolic: { label: ['心血管、肾脏', '与代谢'], notes: ['同比 (33%)'] }, immunology: { label: '免疫学', notes: ['同比 +13%'] }, neuroscience: { label: '神经科学', notes: ['同比 +26%'] }, oncology: { label: '肿瘤学', notes: ['同比 +11%'] }, promoted_brands: { label: '重点推广品牌', notes: ['同比 +3%'] }, established_brands: { label: '成熟品牌', notes: ['同比 (3%)'] }, revenue: { label: '净销售额', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 77%', '同比 +13 个百分点'] }, cost_of_sales: { label: '销售成本' }, other_gross_reconciliation: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +6 个百分点'] }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 18%', '同比 +1%'] }, tax: { label: '税费' }, other_expenses: { label: '其他' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 26%', '同比 +2 个百分点'] }, rnd: { label: '研发', notes: ['占收入 24%', '同比 +6 个百分点'] },
        },
        layout: { labels: zhLayout },
      },
    },
  });
})();

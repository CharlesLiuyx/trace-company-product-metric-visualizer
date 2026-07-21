/* Abbott Q1 FY26 income statement ($B), measured from the active Build source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NAVY = '#000370';
  const NAVY_LABEL = '#000375';
  const NAVY_LINK = '#8586b7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_ZH = 2425;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (valueNote, labelLines, valueTop, labelTop, nameX = 336) => ({
    blocks: [
      { x: 514, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 39, 400), line(valueNote, 28, 400, NOTE)] },
      { x: nameX, top: labelTop, anchor: 'middle', lineGap: 8, lines: labelLines.map((text) => line(text, 40, 800, NAVY_LABEL)) },
    ],
  });
  const labels = {
    established_pharma: sourceLabel('+13% Y/Y', ['Established', 'Pharma'], 368, 430),
    nutritionals: sourceLabel('(6%) Y/Y', ['Nutritionals'], 548, 650),
    diagnostics: sourceLabel('+6% Y/Y', ['Diagnostics'], 734, 837),
    medical_devices: sourceLabel('+13% Y/Y', ['Medical', 'Devices'], 938, 1073, 344),
    revenue: { blocks: [{ x: 981, top: 600, anchor: 'middle', lineGap: 8, lines: [line('Net sales', 40, 800, NAVY_LABEL), line('$value', 39, 400, NAVY_LABEL), line('+8% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1448.5, top: 410, anchor: 'middle', lineGap: 8, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('56% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1448.5, top: 1215, anchor: 'middle', lineGap: 8, lines: [line('Cost of', 37, 800, RED_LABEL), line('revenue', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1916, top: 303, anchor: 'middle', lineGap: 8, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('12% margin', 28, 400, NOTE), line('(4pp) Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1912.5, top: 988, anchor: 'middle', lineGap: 8, lines: [line('Operating', 37, 800, RED_LABEL), line('expenses', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2450, top: 348, anchor: 'start', lineGap: 8, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('10% margin', 28, 400, NOTE), line('(3pp) Y/Y', 28, 400, NOTE)] }] },
    other_income: { blocks: [{ x: 2273, top: 462, anchor: 'middle', lineGap: 8, lines: [line('Other', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)] }] },
    tax: { blocks: [{ x: 2495, top: 606, anchor: 'start', lineGap: 7, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: 2485, top: 718, anchor: 'start', lineGap: 7, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2444, top: 878, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('34% of revenue', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: 2452, top: 1065, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('7% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] }] },
    amortization: { blocks: [{ x: 2442, top: 1252, anchor: 'start', lineGap: 8, lines: [line('Amortization', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('4% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] }] },
  };
  const zhLabels = {
    established_pharma: sourceLabel('同比 +13%', ['成熟药品'], 368, 458),
    nutritionals: sourceLabel('同比 (6%)', ['营养品'], 548, 650),
    diagnostics: sourceLabel('同比 +6%', ['诊断'], 734, 837),
    medical_devices: sourceLabel('同比 +13%', ['医疗设备'], 938, 1097),
    revenue: { blocks: [{ x: 981, top: 600, anchor: 'middle', lineGap: 8, lines: [line('净销售额', 40, 800, NAVY_LABEL), line('$value', 39, 400, NAVY_LABEL), line('同比 +8%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1448.5, top: 410, anchor: 'middle', lineGap: 8, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 56%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1448.5, top: 1223, anchor: 'middle', lineGap: 8, lines: [line('收入', 37, 800, RED_LABEL), line('成本', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1916, top: 295, anchor: 'middle', lineGap: 8, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 12%', 28, 400, NOTE), line('同比 (4 个百分点)', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1916, top: 970, anchor: 'middle', lineGap: 8, lines: [line('运营费用', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT_ZH, top: 342, anchor: 'start', lineGap: 8, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 10%', 28, 400, NOTE), line('同比 (3 个百分点)', 28, 400, NOTE)] }] },
    other_income: { blocks: [{ x: 2273, top: 462, anchor: 'middle', lineGap: 8, lines: [line('其他', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)] }] },
    tax: { blocks: [{ x: RIGHT_ZH, top: 606, anchor: 'start', lineGap: 7, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT_ZH, top: 718, anchor: 'start', lineGap: 7, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT_ZH, top: 878, anchor: 'start', lineGap: 8, lines: [line('销售、一般及管理费用', 23, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 34%', 28, 400, NOTE), line('同比 +4 个百分点', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT_ZH, top: 1065, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 7%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)] }] },
    amortization: { blocks: [{ x: RIGHT_ZH, top: 1243, anchor: 'start', lineGap: 8, lines: [line('摊销', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 4%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'abbott-q1-fy26',
    name: 'Abbott · Q1 FY26',
    company: 'Abbott',
    meta: {
      company: 'Abbott', title: 'Abbott Q1 FY26 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/abbott-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2175,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY_LABEL }, hub: { node: NAVY, label: NAVY_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'abbott-company-wordmark', href: 'data/assets/raster-annotations/abbott/company-wordmark.png', x: 799, y: 234, width: 370, height: 370 },
      { key: 'abbott-established-pharma', href: 'data/assets/raster-annotations/abbott/established-pharma.png', x: 32, y: 398, width: 152, height: 152 },
      { key: 'abbott-nutritionals', href: 'data/assets/raster-annotations/abbott/nutritionals.png', x: 32, y: 585, width: 152, height: 154 },
      { key: 'abbott-diagnostics', href: 'data/assets/raster-annotations/abbott/diagnostics.png', x: 28, y: 783, width: 158, height: 150 },
      { key: 'abbott-medical-devices', href: 'data/assets/raster-annotations/abbott/medical-devices.png', x: 28, y: 1045, width: 158, height: 144 },
    ],
    annotationsSvg: `
      <g data-annotation-clearance="abbott-established-pharma-icon"><rect x="32" y="398" width="152" height="152" fill="transparent"/></g>
      <g data-annotation-clearance="abbott-nutritionals-icon"><rect x="32" y="585" width="152" height="154" fill="transparent"/></g>
      <g data-annotation-clearance="abbott-diagnostics-icon"><rect x="28" y="783" width="158" height="150" fill="transparent"/></g>
      <g data-annotation-clearance="abbott-medical-devices-icon"><rect x="28" y="1045" width="158" height="144" fill="transparent"/></g>
    `,
    layout: {
      scale: 1,
      nodes: {
        established_pharma: { x: 479, y: 460, width: 71, height: 45 }, nutritionals: { x: 479, y: 642, width: 71, height: 65 },
        diagnostics: { x: 479, y: 826, width: 71, height: 70 }, medical_devices: { x: 479, y: 1030, width: 71, height: 183 },
        revenue: { x: 946, y: 747, width: 70, height: 373 }, gross_profit: { x: 1413, y: 595, width: 71, height: 209 },
        cost_of_revenue: { x: 1413, y: 1040, width: 71, height: 162 }, operating_profit: { x: 1881, y: 483, width: 70, height: 42 },
        operating_expenses: { x: 1881, y: 799, width: 70, height: 164 }, other_income: { x: 2238, y: 444, width: 70, height: 4 },
        net_profit: { x: 2347, y: 370, width: 71, height: 35 }, tax: { x: 2347, y: 642, width: 71, height: 10 },
        interest: { x: 2347, y: 756, width: 71, height: 1 }, sga: { x: 2347, y: 881, width: 71, height: 123 },
        rnd: { x: 2347, y: 1120, width: 71, height: 22 }, amortization: { x: 2347, y: 1282, width: 71, height: 13 },
      },
      labels,
    },
    nodes: [
      { id: 'established_pharma', col: 0, order: 0, type: 'source', label: ['Established', 'Pharma'], value: 1.4, notes: ['+13% Y/Y'] },
      { id: 'nutritionals', col: 0, order: 1, type: 'source', label: 'Nutritionals', value: 2.0, valueText: '$2.0B', notes: ['(6%) Y/Y'] },
      { id: 'diagnostics', col: 0, order: 2, type: 'source', label: 'Diagnostics', value: 2.2, notes: ['+6% Y/Y'] },
      { id: 'medical_devices', col: 0, order: 3, type: 'source', label: ['Medical', 'Devices'], value: 5.5, notes: ['+13% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 11.2, notes: ['+8% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.3, notes: ['56% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.9 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.3, notes: ['12% margin', '(4pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.9 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['10% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 3.7, notes: ['34% of revenue', '+4pp Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.8, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.4, notes: ['4% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'established_pharma', target: 'revenue', value: 1.4, sourceWidth: 45, targetWidth: 47, y0: 482.5, y1: 770.5, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'nutritionals', target: 'revenue', value: 2.0, sourceWidth: 65, targetWidth: 67, y0: 674.5, y1: 827.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'diagnostics', target: 'revenue', value: 2.2, sourceWidth: 70, targetWidth: 74, y0: 861, y1: 898, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'medical_devices', target: 'revenue', value: 5.5, sourceWidth: 183, targetWidth: 185, y0: 1121.5, y1: 1027.5, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.3, sourceWidth: 209, targetWidth: 209, y0: 851.5, y1: 699.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.9, sourceWidth: 163, targetWidth: 162, y0: 1038.5, y1: 1121, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.3, sourceWidth: 44, targetWidth: 42, y0: 617, y1: 504, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.9, sourceWidth: 164, targetWidth: 164, y0: 722, y1: 881, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.9, sourceWidth: 28, targetWidth: 31, y0: 497, y1: 385.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 13, targetWidth: 10, y0: 517.5, y1: 647, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 524.5, y1: 756.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 446, y1: 403, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.7, sourceWidth: 124, targetWidth: 123, y0: 861, y1: 942.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 27, targetWidth: 22, y0: 936.5, y1: 1131, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 0.4, sourceWidth: 13, targetWidth: 13, y0: 956.5, y1: 1288.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '雅培 · 2026 财年第一季度',
        meta: { title: '雅培 2026 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 2100 },
        nodes: {
          established_pharma: { label: '成熟药品', notes: ['同比 +13%'] }, nutritionals: { label: '营养品', notes: ['同比 (6%)'] },
          diagnostics: { label: '诊断', notes: ['同比 +6%'] }, medical_devices: { label: '医疗设备', notes: ['同比 +13%'] },
          revenue: { label: '净销售额', notes: ['同比 +8%'] }, gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (4 个百分点)'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用', notes: ['占收入 34%', '同比 +4 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 (0 个百分点)'] }, amortization: { label: '摊销', notes: ['占收入 4%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

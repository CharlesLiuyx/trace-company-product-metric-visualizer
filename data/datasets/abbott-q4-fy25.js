/* Abbott Q4 FY25 income statement ($B), measured from the active Build source. */
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
  const RIGHT = 2470;
  const RIGHT_ZH = 2425;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (valueNote, labelLines, valueTop, labelTop) => ({
    blocks: [
      { x: 514, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 39, 400), line(valueNote, 28, 400, NOTE)] },
      { x: 336, top: labelTop, anchor: 'middle', lineGap: 8, lines: labelLines.map((text) => line(text, 40, 800, NAVY_LABEL)) },
    ],
  });
  const labels = {
    established_pharma: sourceLabel('+9% Y/Y', ['Established', 'Pharma'], 401, 465),
    nutritionals: sourceLabel('(9%) Y/Y', ['Nutritionals'], 564, 670),
    diagnostics: sourceLabel('(2%) Y/Y', ['Diagnostics'], 748, 860),
    medical_devices: sourceLabel('+12% Y/Y', ['Medical', 'Devices'], 948, 1075),
    revenue: { blocks: [{ x: 980, top: 600, anchor: 'middle', lineGap: 8, lines: [line('Net sales', 40, 800, NAVY_LABEL), line('$value', 39, 400, NAVY_LABEL), line('+4% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1448, top: 463, anchor: 'middle', lineGap: 8, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('57% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1448, top: 1223, anchor: 'middle', lineGap: 8, lines: [line('Cost of', 37, 800, RED_LABEL), line('revenue', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1916, top: 328, anchor: 'middle', lineGap: 8, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('20% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1916, top: 970, anchor: 'middle', lineGap: 8, lines: [line('Operating', 37, 800, RED_LABEL), line('expenses', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 353, anchor: 'start', lineGap: 8, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('15% margin', 28, 400, NOTE), line('(69pp) Y/Y', 28, 400, NOTE)] }] },
    other_income: { blocks: [{ x: 2268, top: 516, anchor: 'middle', lineGap: 8, lines: [line('Other', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)] }] },
    tax: { blocks: [{ x: RIGHT, top: 653, anchor: 'start', lineGap: 7, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT, top: 748, anchor: 'start', lineGap: 7, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 891, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('27% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1077, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('6% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] }] },
    amortization: { blocks: [{ x: 2468, top: 1245, anchor: 'start', lineGap: 8, lines: [line('Amortization', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('4% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)] }] },
  };
  const zhLabels = {
    established_pharma: sourceLabel('同比 +9%', ['成熟药品'], 401, 486),
    nutritionals: sourceLabel('同比 (9%)', ['营养品'], 564, 678),
    diagnostics: sourceLabel('同比 (2%)', ['诊断'], 748, 868),
    medical_devices: sourceLabel('同比 +12%', ['医疗设备'], 948, 1100),
    revenue: { blocks: [{ x: 980, top: 600, anchor: 'middle', lineGap: 8, lines: [line('净销售额', 40, 800, NAVY_LABEL), line('$value', 39, 400, NAVY_LABEL), line('同比 +4%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1448, top: 463, anchor: 'middle', lineGap: 8, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 57%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1448, top: 1223, anchor: 'middle', lineGap: 8, lines: [line('收入', 37, 800, RED_LABEL), line('成本', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1916, top: 328, anchor: 'middle', lineGap: 8, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 20%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1916, top: 970, anchor: 'middle', lineGap: 8, lines: [line('运营费用', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT_ZH, top: 353, anchor: 'start', lineGap: 8, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 15%', 28, 400, NOTE), line('同比 (69 个百分点)', 28, 400, NOTE)] }] },
    other_income: { blocks: [{ x: 2268, top: 516, anchor: 'middle', lineGap: 8, lines: [line('其他', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)] }] },
    tax: { blocks: [{ x: RIGHT_ZH, top: 653, anchor: 'start', lineGap: 7, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT_ZH, top: 748, anchor: 'start', lineGap: 7, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT_ZH, top: 891, anchor: 'start', lineGap: 8, lines: [line('销售、一般及管理费用', 23, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 27%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT_ZH, top: 1077, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 6%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)] }] },
    amortization: { blocks: [{ x: RIGHT_ZH, top: 1245, anchor: 'start', lineGap: 8, lines: [line('摊销', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 4%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'abbott-q4-fy25',
    name: 'Abbott · Q4 FY25',
    company: 'Abbott',
    meta: {
      company: 'Abbott',
      title: 'Abbott Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/abbott-q4-fy25.png', width: 2667, height: 1500 },
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
      { key: 'abbott-company-wordmark', href: 'data/assets/raster-annotations/abbott/company-wordmark.png', x: 800, y: 230, width: 370, height: 370 },
      { key: 'abbott-established-pharma', href: 'data/assets/raster-annotations/abbott/established-pharma.png', x: 32, y: 434, width: 152, height: 152 },
      { key: 'abbott-nutritionals', href: 'data/assets/raster-annotations/abbott/nutritionals.png', x: 32, y: 601, width: 152, height: 154 },
      { key: 'abbott-diagnostics', href: 'data/assets/raster-annotations/abbott/diagnostics.png', x: 28, y: 799, width: 158, height: 150 },
      { key: 'abbott-medical-devices', href: 'data/assets/raster-annotations/abbott/medical-devices.png', x: 28, y: 1055, width: 158, height: 144 },
    ],
    layout: {
      scale: 1,
      nodes: {
        established_pharma: { x: 477, y: 495, width: 74, height: 42 }, nutritionals: { x: 477, y: 657, width: 74, height: 60 },
        diagnostics: { x: 477, y: 839, width: 74, height: 74 }, medical_devices: { x: 477, y: 1039, width: 74, height: 172 },
        revenue: { x: 944, y: 752, width: 74, height: 348 }, gross_profit: { x: 1412, y: 648, width: 74, height: 199 },
        cost_of_revenue: { x: 1412, y: 1058, width: 74, height: 149 }, operating_profit: { x: 1880, y: 516, width: 74, height: 68 },
        operating_expenses: { x: 1880, y: 821, width: 74, height: 130 }, other_income: { x: 2232, y: 491, width: 74, height: 4 },
        net_profit: { x: 2346, y: 381, width: 74, height: 54 }, tax: { x: 2346, y: 677, width: 74, height: 17 },
        interest: { x: 2346, y: 780, width: 74, height: 4 }, sga: { x: 2346, y: 902, width: 74, height: 95 },
        rnd: { x: 2346, y: 1118, width: 74, height: 22 }, amortization: { x: 2346, y: 1285, width: 74, height: 12 },
      },
      labels,
    },
    nodes: [
      { id: 'established_pharma', col: 0, order: 0, type: 'source', label: ['Established', 'Pharma'], value: 1.4, notes: ['+9% Y/Y'] },
      { id: 'nutritionals', col: 0, order: 1, type: 'source', label: 'Nutritionals', value: 1.9, notes: ['(9%) Y/Y'] },
      { id: 'diagnostics', col: 0, order: 2, type: 'source', label: 'Diagnostics', value: 2.5, notes: ['(2%) Y/Y'] },
      { id: 'medical_devices', col: 0, order: 3, type: 'source', label: ['Medical', 'Devices'], value: 5.7, notes: ['+12% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 11.5, notes: ['+4% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.5, notes: ['57% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.9 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['20% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.3 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['15% margin', '(69pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.042, valueText: '($42M)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 3.1, notes: ['27% of revenue', '+1pp Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.7, notes: ['6% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.4, notes: ['4% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'established_pharma', target: 'revenue', value: 1.4, sourceWidth: 42, targetWidth: 42, y0: 516, y1: 773, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'nutritionals', target: 'revenue', value: 1.9, sourceWidth: 60, targetWidth: 60, y0: 687, y1: 824, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'diagnostics', target: 'revenue', value: 2.5, sourceWidth: 74, targetWidth: 74, y0: 876, y1: 891, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'medical_devices', target: 'revenue', value: 5.7, sourceWidth: 172, targetWidth: 172, y0: 1125, y1: 1014, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.5, sourceWidth: 199, targetWidth: 199, y0: 851.5, y1: 747.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.9, sourceWidth: 149, targetWidth: 149, y0: 1025.5, y1: 1132.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 68, targetWidth: 68, y0: 682, y1: 550, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.3, sourceWidth: 130, targetWidth: 130, y0: 781, y1: 886, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 50, targetWidth: 50, y0: 541, y1: 406, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 17, targetWidth: 17, y0: 574.5, y1: 685.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.042, sourceWidth: 1, targetWidth: 4, y0: 583.5, y1: 782, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 493, y1: 433, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.1, sourceWidth: 96, targetWidth: 95, y0: 869, y1: 949.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, sourceWidth: 22, targetWidth: 22, y0: 928, y1: 1129, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 0.4, sourceWidth: 12, targetWidth: 12, y0: 945, y1: 1291, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '雅培 · 2025 财年第四季度',
        meta: { title: '雅培 2025 财年第四季度利润表', period: '', periodNote: '', titleTextLength: 2100 },
        nodes: {
          established_pharma: { label: '成熟药品', notes: ['同比 +9%'] }, nutritionals: { label: '营养品', notes: ['同比 (9%)'] },
          diagnostics: { label: '诊断', notes: ['同比 (2%)'] }, medical_devices: { label: '医疗设备', notes: ['同比 +12%'] },
          revenue: { label: '净销售额', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 15%', '同比 (69 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用', notes: ['占收入 27%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 6%', '同比 (0 个百分点)'] }, amortization: { label: '摊销', notes: ['占收入 4%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

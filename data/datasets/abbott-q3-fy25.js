/* Abbott Q3 FY25 income statement ($B), measured from the active Build source. */
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
  const sourceLabel = (valueNote, labelLines, valueTop, labelTop, valueX = 514, labelX = 336) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 39, 400), line(valueNote, 28, 400, NOTE)] },
      { x: labelX, top: labelTop, anchor: 'middle', lineGap: 8, lines: labelLines.map((text) => line(text, 40, 800, NAVY_LABEL)) },
    ],
  });
  const labels = {
    established_pharma: sourceLabel('+7% Y/Y', ['Established', 'Pharma'], 408, 476),
    nutritionals: sourceLabel('+4% Y/Y', ['Nutritionals'], 564, 673),
    diagnostics: sourceLabel('(7%) Y/Y', ['Diagnostics'], 756, 858),
    medical_devices: sourceLabel('+15% Y/Y', ['Medical', 'Devices'], 946, 1063, 523, 345),
    revenue: { blocks: [{ x: 986, top: 618, anchor: 'middle', lineGap: 8, lines: [line('Net sales', 40, 800, NAVY_LABEL), line('$value', 39, 400, NAVY_LABEL), line('+7% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1452, top: 481, anchor: 'middle', lineGap: 8, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('52% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1454, top: 1209, anchor: 'middle', lineGap: 8, lines: [line('Cost of', 37, 800, RED_LABEL), line('revenue', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1920, top: 392, anchor: 'middle', lineGap: 8, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('18% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1920, top: 939, anchor: 'middle', lineGap: 8, lines: [line('Operating', 37, 800, RED_LABEL), line('expenses', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2446, top: 428, anchor: 'start', lineGap: 8, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('14% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)] }] },
    other_income: { blocks: [{ x: 2256, top: 577, anchor: 'middle', lineGap: 8, lines: [line('Other', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)] }] },
    tax: { blocks: [{ x: 2495, top: 676, anchor: 'start', lineGap: 7, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: 2484, top: 800, anchor: 'start', lineGap: 7, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2450, top: 978, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('27% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: 2457, top: 1230, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('7% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)] }] },
  };
  const zhLabels = {
    established_pharma: sourceLabel('同比 +7%', ['成熟药品'], 408, 502),
    nutritionals: sourceLabel('同比 +4%', ['营养品'], 564, 673),
    diagnostics: sourceLabel('同比 (7%)', ['诊断'], 756, 857),
    medical_devices: sourceLabel('同比 +15%', ['医疗设备'], 946, 1088, 523, 345),
    revenue: { blocks: [{ x: 986, top: 618, anchor: 'middle', lineGap: 8, lines: [line('净销售额', 40, 800, NAVY_LABEL), line('$value', 39, 400, NAVY_LABEL), line('同比 +7%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1452, top: 481, anchor: 'middle', lineGap: 8, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 52%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1454, top: 1209, anchor: 'middle', lineGap: 8, lines: [line('收入', 37, 800, RED_LABEL), line('成本', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1920, top: 392, anchor: 'middle', lineGap: 8, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 18%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1920, top: 939, anchor: 'middle', lineGap: 8, lines: [line('运营费用', 37, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT_ZH, top: 428, anchor: 'start', lineGap: 8, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 14%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)] }] },
    other_income: { blocks: [{ x: 2256, top: 577, anchor: 'middle', lineGap: 8, lines: [line('其他', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)] }] },
    tax: { blocks: [{ x: RIGHT_ZH, top: 676, anchor: 'start', lineGap: 7, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT_ZH, top: 800, anchor: 'start', lineGap: 7, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT_ZH, top: 978, anchor: 'start', lineGap: 8, lines: [line('销售、一般及管理费用', 23, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 27%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT_ZH, top: 1230, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 7%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'abbott-q3-fy25',
    name: 'Abbott · Q3 FY25',
    company: 'Abbott',
    meta: {
      company: 'Abbott',
      title: 'Abbott Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/abbott-q3-fy25.png', width: 2667, height: 1500 },
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
      { key: 'abbott-company-wordmark', href: 'data/assets/raster-annotations/abbott/company-wordmark.png', x: 796, y: 230, width: 370, height: 370 },
      { key: 'abbott-established-pharma', href: 'data/assets/raster-annotations/abbott/established-pharma.png', x: 32, y: 446, width: 152, height: 152 },
      { key: 'abbott-nutritionals', href: 'data/assets/raster-annotations/abbott/nutritionals.png', x: 32, y: 614, width: 152, height: 154 },
      { key: 'abbott-diagnostics', href: 'data/assets/raster-annotations/abbott/diagnostics.png', x: 28, y: 806, width: 158, height: 150 },
      { key: 'abbott-medical-devices', href: 'data/assets/raster-annotations/abbott/medical-devices.png', x: 28, y: 1042, width: 158, height: 144 },
    ],
    layout: {
      scale: 1,
      nodes: {
        established_pharma: { x: 481, y: 505, width: 74, height: 42 }, nutritionals: { x: 481, y: 668, width: 74, height: 59 },
        diagnostics: { x: 481, y: 851, width: 74, height: 62 }, medical_devices: { x: 481, y: 1040, width: 74, height: 150 },
        revenue: { x: 948, y: 763, width: 74, height: 312 }, gross_profit: { x: 1421, y: 661, width: 74, height: 161 },
        cost_of_revenue: { x: 1420, y: 1044, width: 74, height: 150 }, operating_profit: { x: 1884, y: 570, width: 74, height: 56 },
        operating_expenses: { x: 1884, y: 810, width: 74, height: 105 }, other_income: { x: 2219, y: 561, width: 74, height: 5 },
        net_profit: { x: 2350, y: 470, width: 74, height: 46 }, tax: { x: 2350, y: 709, width: 74, height: 15 },
        interest: { x: 2350, y: 835, width: 74, height: 5 }, sga: { x: 2350, y: 967, width: 74, height: 83 },
        rnd: { x: 2350, y: 1276, width: 74, height: 20 },
      },
      labels,
    },
    nodes: [
      { id: 'established_pharma', col: 0, order: 0, type: 'source', label: ['Established', 'Pharma'], value: 1.5, notes: ['+7% Y/Y'] },
      { id: 'nutritionals', col: 0, order: 1, type: 'source', label: 'Nutritionals', value: 2.2, notes: ['+4% Y/Y'] },
      { id: 'diagnostics', col: 0, order: 2, type: 'source', label: 'Diagnostics', value: 2.3, notes: ['(7%) Y/Y'] },
      { id: 'medical_devices', col: 0, order: 3, type: 'source', label: ['Medical', 'Devices'], value: 5.4, notes: ['+15% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 11.4, notes: ['+7% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.9, notes: ['52% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['18% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.8 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['14% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.044, valueText: '($44M)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 3.1, notes: ['27% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.8, notes: ['7% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'established_pharma', target: 'revenue', value: 1.5, sourceWidth: 42, targetWidth: 42, y0: 526, y1: 784, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'nutritionals', target: 'revenue', value: 2.2, sourceWidth: 59, targetWidth: 59, y0: 697.5, y1: 834.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'diagnostics', target: 'revenue', value: 2.3, sourceWidth: 62, targetWidth: 62, y0: 882, y1: 895, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'medical_devices', target: 'revenue', value: 5.4, sourceWidth: 150, targetWidth: 149, y0: 1115, y1: 1000.5, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 5.9, sourceWidth: 161, targetWidth: 161, y0: 843.5, y1: 741.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.5, sourceWidth: 150, targetWidth: 150, y0: 999, y1: 1119, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 56, targetWidth: 56, y0: 689, y1: 598, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.8, sourceWidth: 105, targetWidth: 105, y0: 769.5, y1: 862.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.4, sourceWidth: 40, targetWidth: 41, y0: 590, y1: 490.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 15, targetWidth: 15, y0: 617.5, y1: 716.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.044, sourceWidth: 1, targetWidth: 5, y0: 625.5, y1: 837.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.2, sourceWidth: 5, targetWidth: 5, y0: 563.5, y1: 513.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.1, sourceWidth: 83, targetWidth: 83, y0: 851.5, y1: 1008.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 22, targetWidth: 20, y0: 904, y1: 1286, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '雅培 · 2025 财年第三季度',
        meta: { title: '雅培 2025 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 2100 },
        nodes: {
          established_pharma: { label: '成熟药品', notes: ['同比 +7%'] }, nutritionals: { label: '营养品', notes: ['同比 +4%'] },
          diagnostics: { label: '诊断', notes: ['同比 (7%)'] }, medical_devices: { label: '医疗设备', notes: ['同比 +15%'] },
          revenue: { label: '净销售额', notes: ['同比 +7%'] }, gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 14%', '同比 (1 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用', notes: ['占收入 27%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

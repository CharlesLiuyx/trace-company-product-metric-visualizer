/* Merck Q4 FY25 income statement ($B), measured against the local reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const TEAL = '#007a73';
  const TEAL_LINK = '#85bcb8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2496;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (name, valueTop, nameX, nameTop, note) => ({
    blocks: [
      { x: 502, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 39, 400), line(note, 28, 400, NOTE)] },
      { x: nameX, top: nameTop, anchor: 'end', lineGap: 4, lines: (Array.isArray(name) ? name : [name]).map((item) => line(item, 40, 800)) },
    ],
  });
  const otherRevenueAnnotation = (isZh) => `
    <g class="sankey-interactive-annotation" data-node="other_revenue" data-link-numerator="other_revenue" data-link-denominator="revenue" data-link-anchor-x="1027" data-link-anchor-y="1200">
      <path d="M838 1370 H915 C1026.5 1370 1026.5 1034 1215 1034" fill="none" stroke="${TEAL_LINK}" stroke-width="2" stroke-linecap="butt"/>
      <rect x="808" y="1200" width="132" height="172" fill="transparent" pointer-events="all"/>
      <text x="873" y="1250" text-anchor="middle" font-size="40" font-weight="800" fill="${TEAL}">${isZh ? '其他' : 'Other'}</text>
      <text x="873" y="1297" text-anchor="middle" font-size="39" font-weight="400" fill="${TEAL}">$0.1B</text>
      <text x="873" y="1333" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${isZh ? '同比 (72%)' : '(72%) Y/Y'}</text>
    </g>`;

  const labels = {
    oncology: sourceLabel('Oncology', 342, 419, 493, '+8% Y/Y'),
    vaccines: sourceLabel('Vaccines', 646, 399, 736, '(12%) Y/Y'),
    hospital_acute_care: sourceLabel(['Hospital', 'Acute Care'], 814, 430, 859, '+4% Y/Y'),
    diabetes: sourceLabel('Diabetes', 960, 399, 1032, '+3% Y/Y'),
    other_pharma: sourceLabel('Other', 1080, 399, 1164, '+26% Y/Y'),
    pharma: { blocks: [{ x: 876, top: 475, anchor: 'middle', lineGap: 8, lines: [line('Pharma', 40, 800), line('$value', 39, 400), line('+6% Y/Y', 28, 400, NOTE)] }] },
    animal_health: { blocks: [{ x: 873, top: 1030, anchor: 'middle', lineGap: 8, lines: [line('Animal Health', 40, 800), line('$value', 39, 400), line('+8% Y/Y', 28, 400, NOTE)] }] },
    other_revenue: { blocks: [] },
    revenue: { blocks: [{ x: 1250, top: 560, anchor: 'middle', lineGap: 8, lines: [line('Revenue', 40, 800), line('$value', 39, 400), line('+5% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1624, top: 424, anchor: 'middle', lineGap: 8, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('66% margin', 28, 400, NOTE), line('(9pp) Y/Y', 28, 400, NOTE)] }] },
    cost_of_sales: { blocks: [{ x: 1624, top: 1166, anchor: 'middle', lineGap: 8, lines: [line('Cost of sales', 35, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)] }] },
    pretax_profit: { blocks: [{ x: 2007, top: 323, anchor: 'middle', lineGap: 8, lines: [line('Pretax profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('21% margin', 28, 400, NOTE), line('(6pp) Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 2007, top: 942, anchor: 'middle', lineGap: 6, lines: [line('Operating', 39, 800, RED_LABEL), line('expenses', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 360, anchor: 'start', lineGap: 8, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('33% margin', 28, 400, NOTE), line('+15pp Y/Y', 28, 400, NOTE)] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 656, anchor: 'start', lineGap: 8, lines: [line('Tax', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 846, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('24% of revenue', 28, 400, NOTE), line('(6pp) Y/Y', 28, 400, NOTE)] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 1086, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('18% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)] }] },
    other_opex: { blocks: [{ x: RIGHT_X, top: 1280, anchor: 'start', lineGap: 8, lines: [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
  };

  const zhSourceLabel = (name, valueTop, nameX, nameTop, note) => ({
    blocks: [
      { x: 502, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 39, 400), line(note, 28, 400, NOTE)] },
      { x: nameX, top: nameTop, anchor: 'end', lineGap: 4, lines: (Array.isArray(name) ? name : [name]).map((item) => line(item, 39, 800)) },
    ],
  });

  const zhLabels = {
    oncology: zhSourceLabel('肿瘤', 342, 419, 493, '同比 +8%'),
    vaccines: zhSourceLabel('疫苗', 646, 399, 736, '同比 (12%)'),
    hospital_acute_care: zhSourceLabel(['医院', '急症护理'], 814, 430, 859, '同比 +4%'),
    diabetes: zhSourceLabel('糖尿病', 960, 399, 1032, '同比 +3%'),
    other_pharma: zhSourceLabel('其他', 1080, 399, 1164, '同比 +26%'),
    pharma: { blocks: [{ x: 876, top: 475, anchor: 'middle', lineGap: 8, lines: [line('制药业务', 40, 800), line('$value', 39, 400), line('同比 +6%', 28, 400, NOTE)] }] },
    animal_health: { blocks: [{ x: 873, top: 1030, anchor: 'middle', lineGap: 8, lines: [line('动物保健', 40, 800), line('$value', 39, 400), line('同比 +8%', 28, 400, NOTE)] }] },
    other_revenue: { blocks: [] },
    revenue: { blocks: [{ x: 1250, top: 560, anchor: 'middle', lineGap: 8, lines: [line('收入', 40, 800), line('$value', 39, 400), line('同比 +5%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1624, top: 424, anchor: 'middle', lineGap: 8, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 66%', 28, 400, NOTE), line('同比 (9 个百分点)', 28, 400, NOTE)] }] },
    cost_of_sales: { blocks: [{ x: 1624, top: 1166, anchor: 'middle', lineGap: 8, lines: [line('销售成本', 35, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)] }] },
    pretax_profit: { blocks: [{ x: 2007, top: 323, anchor: 'middle', lineGap: 8, lines: [line('税前利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 21%', 28, 400, NOTE), line('同比 (6 个百分点)', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 2007, top: 942, anchor: 'middle', lineGap: 6, lines: [line('运营费用', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 360, anchor: 'start', lineGap: 8, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 33%', 28, 400, NOTE), line('同比 +15 个百分点', 28, 400, NOTE)] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 656, anchor: 'start', lineGap: 8, lines: [line('税费', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 846, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 24%', 28, 400, NOTE), line('同比 (6 个百分点)', 28, 400, NOTE)] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 1086, anchor: 'start', lineGap: 8, lines: [line('销售、一般及', 26, 800, RED_LABEL), line('管理费用', 26, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 18%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)] }] },
    other_opex: { blocks: [{ x: RIGHT_X, top: 1280, anchor: 'start', lineGap: 8, lines: [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'merck-q4-fy25', name: 'Merck · Q4 FY25', company: 'Merck',
    meta: {
      company: 'Merck', title: 'Merck Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/merck-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2125,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: TEAL, label: TEAL }, hub: { node: TEAL, label: TEAL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: TEAL_LINK, hub: TEAL_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'merck-company-wordmark', href: 'data/assets/raster-annotations/merck/company-wordmark.png', x: 744, y: 226, width: 730, height: 216 },
      { key: 'merck-keytruda', href: 'data/assets/raster-annotations/merck/keytruda.png', x: 0, y: 486, width: 218, height: 86 },
      { key: 'merck-gardasil-9', href: 'data/assets/raster-annotations/merck/gardasil-9.png', x: 16, y: 700, width: 205, height: 92 },
      { key: 'merck-bridion', href: 'data/assets/raster-annotations/merck/bridion.png', x: 18, y: 848, width: 204, height: 98 },
      { key: 'merck-januvia', href: 'data/assets/raster-annotations/merck/januvia.png', x: 29, y: 982, width: 179, height: 116 },
    ],
    annotationsSvg: otherRevenueAnnotation(false),
    layout: {
      scale: 1,
      nodes: {
        oncology: { x: 467, y: 434, width: 71, height: 183 }, vaccines: { x: 467, y: 738, width: 71, height: 42 },
        hospital_acute_care: { x: 467, y: 906, width: 71, height: 15 }, diabetes: { x: 467, y: 1052, width: 71, height: 8 }, other_pharma: { x: 467, y: 1171, width: 71, height: 34 },
        pharma: { x: 841, y: 619, width: 70, height: 289 }, animal_health: { x: 838, y: 1175, width: 70, height: 27 }, other_revenue: { x: 838, y: 1369, width: 0, height: 0 },
        revenue: { x: 1215, y: 716, width: 70, height: 319 }, gross_profit: { x: 1588, y: 616, width: 71, height: 210 }, cost_of_sales: { x: 1588, y: 1050, width: 71, height: 106 },
        pretax_profit: { x: 1972, y: 516, width: 71, height: 65 }, operating_expenses: { x: 1972, y: 788, width: 71, height: 144 },
        net_profit: { x: 2335, y: 408, width: 71, height: 56 }, tax: { x: 2335, y: 693, width: 71, height: 8 }, rnd: { x: 2335, y: 880, width: 71, height: 73 }, sga: { x: 2335, y: 1105, width: 71, height: 55 }, other_opex: { x: 2335, y: 1317, width: 71, height: 10 },
      },
      labels,
    },
    nodes: [
      { id: 'oncology', col: 0, order: 0, type: 'source', label: 'Oncology', value: 9.4, notes: ['+8% Y/Y'] },
      { id: 'vaccines', col: 0, order: 1, type: 'source', label: 'Vaccines', value: 2.2, notes: ['(12%) Y/Y'] },
      { id: 'hospital_acute_care', col: 0, order: 2, type: 'source', label: ['Hospital', 'Acute Care'], value: 0.9, notes: ['+4% Y/Y'] },
      { id: 'diabetes', col: 0, order: 3, type: 'source', label: 'Diabetes', value: 0.5, notes: ['+3% Y/Y'] },
      { id: 'other_pharma', col: 0, order: 4, type: 'source', label: 'Other', value: 1.8, notes: ['+26% Y/Y'] },
      { id: 'pharma', col: 1, order: 0, type: 'hub', label: 'Pharma', value: 14.8, notes: ['+6% Y/Y'] },
      { id: 'animal_health', col: 1, order: 1, type: 'source', label: 'Animal Health', value: 1.5, notes: ['+8% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.1, notes: ['(72%) Y/Y'], color: BG },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 16.4, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.8, notes: ['66% margin', '(9pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 5.6 },
      { id: 'pretax_profit', col: 4, order: 0, type: 'profit', label: 'Pretax profit', value: 3.4, notes: ['21% margin', '(6pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.0, notes: ['33% margin', '+15pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 3.9, notes: ['24% of revenue', '(6pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 2.9, notes: ['18% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.6 },
    ],
    links: [
      { source: 'oncology', target: 'pharma', value: 9.4, sourceWidth: 183, targetWidth: 183, y0: 525.5, y1: 710.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'vaccines', target: 'pharma', value: 2.2, sourceWidth: 42, targetWidth: 42, y0: 759, y1: 823.5, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'hospital_acute_care', target: 'pharma', value: 0.9, sourceWidth: 15, targetWidth: 15, y0: 913.5, y1: 852, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'diabetes', target: 'pharma', value: 0.5, sourceWidth: 8, targetWidth: 8, y0: 1056, y1: 863.5, sourceOrder: 0, targetOrder: 3, linkTint: TEAL_LINK },
      { source: 'other_pharma', target: 'pharma', value: 1.8, sourceWidth: 34, targetWidth: 40, y0: 1188, y1: 888, sourceOrder: 0, targetOrder: 4, linkTint: TEAL_LINK },
      { source: 'pharma', target: 'revenue', value: 14.8, sourceWidth: 289, targetWidth: 289, y0: 763.5, y1: 860.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'animal_health', target: 'revenue', value: 1.5, sourceWidth: 27, targetWidth: 30, y0: 1188.5, y1: 1020, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 1369.5, y1: 1034, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK, interactionOnly: true },
      { source: 'revenue', target: 'gross_profit', value: 10.8, sourceWidth: 210, targetWidth: 210, y0: 821, y1: 721, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 5.6, sourceWidth: 109, targetWidth: 106, y0: 980.5, y1: 1103, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'pretax_profit', value: 3.4, sourceWidth: 65, targetWidth: 65, y0: 648.5, y1: 548.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.4, sourceWidth: 145, targetWidth: 144, y0: 753.5, y1: 860, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_profit', target: 'net_profit', value: 3.0, sourceWidth: 56, targetWidth: 56, y0: 544, y1: 436, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_profit', target: 'tax', value: 0.5, sourceWidth: 9, targetWidth: 8, y0: 576.5, y1: 697, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.9, sourceWidth: 73, targetWidth: 73, y0: 824.5, y1: 916.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 2.9, sourceWidth: 55, targetWidth: 55, y0: 888.5, y1: 1132.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.6, sourceWidth: 16, targetWidth: 10, y0: 924, y1: 1322, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['MERCK', 'Keytruda', 'Gardasil', 'Bridion', 'Januvia'],
      zh: {
        name: '默沙东 · 2025 财年第四季度',
        meta: { title: '默沙东 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleTextLength: 1900 },
        nodes: {
          oncology: { label: '肿瘤', notes: ['同比 +8%'] }, vaccines: { label: '疫苗', notes: ['同比 (12%)'] }, hospital_acute_care: { label: ['医院', '急症护理'], notes: ['同比 +4%'] }, diabetes: { label: '糖尿病', notes: ['同比 +3%'] }, other_pharma: { label: '其他', notes: ['同比 +26%'] },
          pharma: { label: '制药业务', notes: ['同比 +6%'] }, animal_health: { label: '动物保健', notes: ['同比 +8%'] }, other_revenue: { label: '其他', notes: ['同比 (72%)'] }, revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 66%', '同比 (9 个百分点)'] }, cost_of_sales: { label: '销售成本' }, pretax_profit: { label: '税前利润', notes: ['利润率 21%', '同比 (6 个百分点)'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 33%', '同比 +15 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 24%', '同比 (6 个百分点)'] }, sga: { label: '销售、一般及管理费用', notes: ['占收入 18%', '同比 (1 个百分点)'] }, other_opex: { label: '其他' },
        },
        layout: { labels: zhLabels }, annotationsSvg: otherRevenueAnnotation(true),
      },
    },
  });
})();

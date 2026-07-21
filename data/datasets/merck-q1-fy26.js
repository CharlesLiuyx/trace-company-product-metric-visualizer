/* Merck Q1 FY26 income statement ($B), measured from the Build Source. */
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
  const RIGHT_X = 2432;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (name, valueTop, nameX, nameTop, note, valueX = 497) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 39, 400), line(note, 28, 400, NOTE)] },
      { x: nameX, top: nameTop, anchor: 'end', lineGap: 4, lines: (Array.isArray(name) ? name : [name]).map((item) => line(item, 40, 800)) },
    ],
  });
  const labels = {
    oncology: sourceLabel('Oncology', 383, 419, 541, '+12% Y/Y'),
    vaccines: sourceLabel('Vaccines', 681, 419, 772, '(13%) Y/Y'),
    hospital_acute_care: sourceLabel(['Hospital', 'Acute Care'], 840, 430, 886, '(4%) Y/Y'),
    diabetes: sourceLabel('Diabetes', 954, 419, 1024, '(28%) Y/Y'),
    other_pharma: sourceLabel('Other', 1070, 397, 1153, '+27% Y/Y', 475),
    pharma: { blocks: [{ x: 867, top: 478, anchor: 'middle', lineGap: 8, lines: [line('Pharma', 40, 800), line('$value', 39, 400), line('+5% Y/Y', 28, 400, NOTE)] }] },
    animal_health: { blocks: [{ x: 865, top: 999, anchor: 'middle', lineGap: 8, lines: [line('Animal Health', 40, 800), line('$value', 39, 400), line('+13% Y/Y', 28, 400, NOTE)] }] },
    other_revenue: { blocks: [{ x: 869, top: 1231, anchor: 'middle', lineGap: 8, lines: [line('Other', 40, 800), line('$value', 39, 400), line('(52%) Y/Y', 28, 400, NOTE)] }] },
    revenue: { blocks: [{ x: 1241, top: 556, anchor: 'middle', lineGap: 8, lines: [line('Revenue', 40, 800), line('$value', 39, 400), line('+5% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1617, top: 441, anchor: 'middle', lineGap: 8, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('74% margin', 28, 400, NOTE), line('(4pp) Y/Y', 28, 400, NOTE)] }] },
    cost_of_sales: { blocks: [{ x: 1617, top: 1182, anchor: 'middle', lineGap: 8, lines: [line('Cost of', 35, 800, RED_LABEL), line('sales', 35, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)] }] },
    operating_expenses: { blocks: [{ x: 1992, top: 538, anchor: 'middle', lineGap: 6, lines: [line('Operating', 39, 800, RED_LABEL), line('expenses', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)] }] },
    operating_loss: { blocks: [{ x: 1826, top: 1103, anchor: 'middle', lineGap: 8, lines: [line('Operating', 39, 800, RED_LABEL), line('loss', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL), line('(22%) margin', 28, 400, NOTE), line('(60pp) Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 674, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('77% of revenue', 28, 400, NOTE), line('+54pp Y/Y', 28, 400, NOTE)] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 995, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('17% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)] }] },
    other_opex: { blocks: [{ x: 2476, top: 1200, anchor: 'start', lineGap: 8, lines: [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
  };

  const zhLabels = {
    oncology: sourceLabel('肿瘤', 383, 419, 541, '同比 +12%'),
    vaccines: sourceLabel('疫苗', 681, 419, 772, '同比 (13%)'),
    hospital_acute_care: sourceLabel(['医院', '急症护理'], 840, 430, 886, '同比 (4%)'),
    diabetes: sourceLabel('糖尿病', 954, 419, 1024, '同比 (28%)'),
    other_pharma: sourceLabel('其他', 1070, 397, 1153, '同比 +27%', 475),
    pharma: { blocks: [{ x: 867, top: 478, anchor: 'middle', lineGap: 8, lines: [line('制药业务', 40, 800), line('$value', 39, 400), line('同比 +5%', 28, 400, NOTE)] }] },
    animal_health: { blocks: [{ x: 865, top: 999, anchor: 'middle', lineGap: 8, lines: [line('动物保健', 40, 800), line('$value', 39, 400), line('同比 +13%', 28, 400, NOTE)] }] },
    other_revenue: { blocks: [{ x: 869, top: 1231, anchor: 'middle', lineGap: 8, lines: [line('其他', 40, 800), line('$value', 39, 400), line('同比 (52%)', 28, 400, NOTE)] }] },
    revenue: { blocks: [{ x: 1241, top: 556, anchor: 'middle', lineGap: 8, lines: [line('收入', 40, 800), line('$value', 39, 400), line('同比 +5%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1617, top: 441, anchor: 'middle', lineGap: 8, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 74%', 28, 400, NOTE), line('同比 (4 个百分点)', 28, 400, NOTE)] }] },
    cost_of_sales: { blocks: [{ x: 1617, top: 1182, anchor: 'middle', lineGap: 8, lines: [line('销售', 35, 800, RED_LABEL), line('成本', 35, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)] }] },
    operating_expenses: { blocks: [{ x: 1992, top: 538, anchor: 'middle', lineGap: 6, lines: [line('运营费用', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)] }] },
    operating_loss: { blocks: [{ x: 1826, top: 1103, anchor: 'middle', lineGap: 8, lines: [line('营业亏损', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL), line('利润率 (22%)', 28, 400, NOTE), line('同比 (60 个百分点)', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 674, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 77%', 28, 400, NOTE), line('同比 +54 个百分点', 28, 400, NOTE)] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 995, anchor: 'start', lineGap: 8, lines: [line('销售、一般及', 26, 800, RED_LABEL), line('管理费用', 26, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 17%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)] }] },
    other_opex: { blocks: [{ x: 2476, top: 1200, anchor: 'start', lineGap: 8, lines: [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'merck-q1-fy26', name: 'Merck · Q1 FY26', company: 'Merck',
    meta: {
      company: 'Merck', title: 'Merck Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/merck-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2125,
      hidePeriodStamp: true,
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
    layout: {
      scale: 1,
      nodes: {
        oncology: { x: 462, y: 470, width: 71, height: 183 }, vaccines: { x: 462, y: 774, width: 71, height: 43 },
        hospital_acute_care: { x: 462, y: 926, width: 71, height: 18 }, diabetes: { x: 462, y: 1048, width: 71, height: 9 }, other_pharma: { x: 462, y: 1166, width: 71, height: 31 },
        pharma: { x: 836, y: 622, width: 70, height: 292 }, animal_health: { x: 836, y: 1143, width: 70, height: 34 }, other_revenue: { x: 831, y: 1373, width: 70, height: 2 },
        revenue: { x: 1210, y: 699, width: 70, height: 334 }, gross_profit: { x: 1583, y: 622, width: 71, height: 246 }, cost_of_sales: { x: 1583, y: 1073, width: 71, height: 84 },
        operating_loss: { x: 1794, y: 1003, width: 70, height: 70 }, operating_expenses: { x: 1960, y: 685, width: 70, height: 319 },
        rnd: { x: 2330, y: 613, width: 71, height: 256 }, sga: { x: 2330, y: 1003, width: 71, height: 54 }, other_opex: { x: 2330, y: 1236, width: 71, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'oncology', col: 0, order: 0, type: 'source', label: 'Oncology', value: 9.0, valueText: '$9.0B', notes: ['+12% Y/Y'] },
      { id: 'vaccines', col: 0, order: 1, type: 'source', label: 'Vaccines', value: 2.2, notes: ['(13%) Y/Y'] },
      { id: 'hospital_acute_care', col: 0, order: 2, type: 'source', label: ['Hospital', 'Acute Care'], value: 0.6, notes: ['(4%) Y/Y'] },
      { id: 'diabetes', col: 0, order: 3, type: 'source', label: 'Diabetes', value: 1.0, valueText: '$1.0B', notes: ['(28%) Y/Y'] },
      { id: 'other_pharma', col: 0, order: 4, type: 'source', label: 'Other', value: 1.6, notes: ['+27% Y/Y'] },
      { id: 'pharma', col: 1, order: 0, type: 'hub', label: 'Pharma', value: 14.3, notes: ['+5% Y/Y'] },
      { id: 'animal_health', col: 1, order: 1, type: 'source', label: 'Animal Health', value: 1.8, notes: ['+13% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.1, notes: ['(52%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 16.3, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.1, notes: ['74% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 4.2 },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -3.5, notes: ['(22%) margin', '(60pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 15.6 },
      { id: 'rnd', col: 6, order: 0, type: 'cost', label: 'R&D', value: 12.6, notes: ['77% of revenue', '+54pp Y/Y'] },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: 'SG&A', value: 2.7, notes: ['17% of revenue', '+0pp Y/Y'] },
      { id: 'other_opex', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.3 },
    ],
    links: [
      { source: 'oncology', target: 'pharma', value: 9.0, sourceWidth: 183, targetWidth: 183, y0: 561.5, y1: 713.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'vaccines', target: 'pharma', value: 2.2, sourceWidth: 43, targetWidth: 43, y0: 795.5, y1: 826.5, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'hospital_acute_care', target: 'pharma', value: 0.6, sourceWidth: 18, targetWidth: 18, y0: 935, y1: 857, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'diabetes', target: 'pharma', value: 1.0, sourceWidth: 9, targetWidth: 9, y0: 1052.5, y1: 870.5, sourceOrder: 0, targetOrder: 3, linkTint: TEAL_LINK },
      { source: 'other_pharma', target: 'pharma', value: 1.6, sourceWidth: 31, targetWidth: 39, y0: 1181.5, y1: 894.5, sourceOrder: 0, targetOrder: 4, linkTint: TEAL_LINK },
      { source: 'pharma', target: 'revenue', value: 14.3, sourceWidth: 292, targetWidth: 294, y0: 768, y1: 846, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'animal_health', target: 'revenue', value: 1.8, sourceWidth: 34, targetWidth: 39, y0: 1160, y1: 1012.5, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 1374, y1: 1032.5, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.1, sourceWidth: 247, targetWidth: 246, y0: 822.5, y1: 745, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 4.2, sourceWidth: 87, targetWidth: 84, y0: 989.5, y1: 1115, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.1, sourceWidth: 246, targetWidth: 249, y0: 745, y1: 809.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 3.5, sourceWidth: 70, targetWidth: 70, y0: 1038, y1: 969, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 12.6, sourceWidth: 257, targetWidth: 256, y0: 813.5, y1: 741, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 2.7, sourceWidth: 56, targetWidth: 54, y0: 970, y1: 1030, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, sourceWidth: 6, targetWidth: 4, y0: 1001, y1: 1238, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['MERCK', 'Keytruda', 'Gardasil', 'Bridion', 'Januvia'],
      zh: {
        name: '默沙东 · 2026 财年第一季度',
        meta: { title: '默沙东 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度', titleTextLength: 1900 },
        nodes: {
          oncology: { label: '肿瘤', notes: ['同比 +12%'] }, vaccines: { label: '疫苗', notes: ['同比 (13%)'] }, hospital_acute_care: { label: ['医院', '急症护理'], notes: ['同比 (4%)'] }, diabetes: { label: '糖尿病', notes: ['同比 (28%)'] }, other_pharma: { label: '其他', notes: ['同比 +27%'] },
          pharma: { label: '制药业务', notes: ['同比 +5%'] }, animal_health: { label: '动物保健', notes: ['同比 +13%'] }, revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (4 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_loss: { label: '营业亏损', notes: ['利润率 (22%)', '同比 (60 个百分点)'] }, operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 77%', '同比 +54 个百分点'] }, sga: { label: '销售、一般及管理费用', notes: ['占收入 17%', '同比 +0 个百分点'] }, other_opex: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

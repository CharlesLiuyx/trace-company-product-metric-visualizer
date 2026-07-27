/* Pfizer Q4 FY25 income statement ($B), measured against the local reference. */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#6b6b6b';
  const PURPLE = '#3107c7';
  const BLUE_LINK = '#7ebbea';
  const GREEN = '#2ca52a';
  const GREEN_LABEL = '#00934f';
  const GREEN_LINK = '#9acd99';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e18486';
  const RIGHT_X = 2420;

  const zhLayoutLabels = {
    primary_care: { blocks: [
      { x: 499, top: 480, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (11%)', size: 28, weight: 400, color: NOTE }] },
      { x: 335, top: 598, anchor: 'middle', lineGap: 4, lines: [{ text: '初级', size: 39, weight: 800 }, { text: '医疗', size: 39, weight: 800 }] },
    ] },
    specialty_care: { blocks: [
      { x: 499, top: 758, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +8%', size: 28, weight: 400, color: NOTE }] },
      { x: 330, top: 849, anchor: 'middle', lineGap: 4, lines: [{ text: '专科', size: 39, weight: 800 }, { text: '医疗', size: 39, weight: 800 }] },
    ] },
    oncology: { blocks: [
      { x: 499, top: 976, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +9%', size: 28, weight: 400, color: NOTE }] },
      { x: 370, top: 1094, anchor: 'middle', lines: [{ text: '肿瘤', size: 39, weight: 800 }] },
    ] },
    business_innovation: { blocks: [
      { x: 873, top: 1064, anchor: 'middle', lineGap: 4, lines: [{ text: '业务', size: 39, weight: 800 }, { text: '创新', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +26%', size: 28, weight: 400, color: NOTE }] },
    ] },
    biopharma: { blocks: [{ x: 873, top: 540, anchor: 'middle', lineGap: 8, lines: [{ text: '生物制药', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (2%)', size: 28, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1245, top: 620, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (1%)', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1618, top: 505, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 70%', size: 28, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1618, top: 1198, anchor: 'middle', lineGap: 5, lines: [{ text: '销售', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
    operating_loss: { blocks: [{ x: 1796, top: 1098, anchor: 'middle', lineGap: 6, lines: [{ text: '营业', size: 39, weight: 800 }, { text: '亏损', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (9%)', size: 28, weight: 400, color: NOTE }, { text: '同比 (9 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1993, top: 1042, anchor: 'middle', lineGap: 5, lines: [{ text: '营业费用', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
    other: { blocks: [{ x: RIGHT_X, top: 540, anchor: 'start', lineGap: 6, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 29%', size: 28, weight: 400, color: NOTE }, { text: '同比 +12 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 770, anchor: 'start', lineGap: 6, lines: [{ text: '销售、一般及', size: 31, weight: 800 }, { text: '行政费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 24%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 970, anchor: 'start', lineGap: 6, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 19%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    amortization: { blocks: [{ x: RIGHT_X, top: 1155, anchor: 'start', lineGap: 6, lines: [{ text: '摊销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pfizer-q4-fy25', name: 'Pfizer · Q4 FY25', company: 'Pfizer',
    meta: {
      company: 'Pfizer', title: 'Pfizer Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pfizer-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2150,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/pfizer/company-wordmark.png', x: 805, y: 220, width: 655, height: 275 },
      { key: 'primary-care-products', href: 'data/assets/raster-annotations/pfizer/primary-care-products.png', x: 0, y: 495, width: 230, height: 245 },
      { key: 'specialty-care-vyndaqel', href: 'data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png', x: 0, y: 825, width: 230, height: 108 },
      { key: 'oncology-ibrance', href: 'data/assets/raster-annotations/pfizer/oncology-ibrance.png', x: 0, y: 1040, width: 235, height: 115 },
    ],
    layout: {
      scale: 17.15,
      nodes: {
        primary_care: { x: 463, y: 571, width: 72, height: 136 }, specialty_care: { x: 463, y: 847, width: 72, height: 82 }, oncology: { x: 463, y: 1067, width: 72, height: 76 }, business_innovation: { x: 836, y: 1261, width: 73, height: 7 },
        biopharma: { x: 836, y: 680, width: 73, height: 295 }, revenue: { x: 1209, y: 761, width: 73, height: 302 },
        gross_profit: { x: 1582, y: 685, width: 72, height: 211 }, cost_of_sales: { x: 1582, y: 1080, width: 72, height: 91 }, operating_loss: { x: 1760, y: 1044, width: 73, height: 27 }, operating_expenses: { x: 1957, y: 782, width: 73, height: 241 },
        other: { x: 2331, y: 533, width: 73, height: 88 }, sga: { x: 2331, y: 760, width: 73, height: 65 }, rnd: { x: 2331, y: 962, width: 73, height: 58 }, amortization: { x: 2331, y: 1184, width: 73, height: 22 },
      },
      labels: {
        primary_care: { blocks: [{ x: 499, top: 480, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(11%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 335, top: 598, anchor: 'middle', lineGap: 4, lines: [{ text: 'Primary', size: 39, weight: 800 }, { text: 'Care', size: 39, weight: 800 }] }] },
        specialty_care: { blocks: [{ x: 499, top: 758, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 330, top: 849, anchor: 'middle', lineGap: 4, lines: [{ text: 'Specialty', size: 39, weight: 800 }, { text: 'Care', size: 39, weight: 800 }] }] },
        oncology: { blocks: [
          { x: 499, top: 976, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 370, top: 1094, anchor: 'middle', lines: [{ text: 'Oncology', size: 39, weight: 800 }] },
        ] },
        business_innovation: { blocks: [{ x: 873, top: 1064, anchor: 'middle', lineGap: 4, lines: [{ text: 'Business', size: 39, weight: 800 }, { text: 'innovation', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        biopharma: { blocks: [{ x: 873, top: 540, anchor: 'middle', lineGap: 8, lines: [{ text: 'Biopharma', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        revenue: { blocks: [{ x: 1245, top: 620, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(1%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1618, top: 505, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '70% margin', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1618, top: 1198, anchor: 'middle', lineGap: 5, lines: [{ text: 'Cost', size: 35, weight: 800 }, { text: 'of sales', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
        operating_loss: { blocks: [{ x: 1796, top: 1098, anchor: 'middle', lineGap: 6, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'loss', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(9%) Y/Y', size: 28, weight: 400, color: NOTE }, { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1993, top: 1042, anchor: 'middle', lineGap: 5, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
        other: { blocks: [{ x: RIGHT_X, top: 540, anchor: 'start', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '29% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+12pp Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 770, anchor: 'start', lineGap: 6, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '24% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_X, top: 970, anchor: 'start', lineGap: 6, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '19% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        amortization: { blocks: [{ x: RIGHT_X, top: 1155, anchor: 'start', lineGap: 6, lines: [{ text: 'Amortization', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'primary_care', col: 0, order: 0, type: 'source', label: ['Primary', 'Care'], value: 7.9, notes: ['(11%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'specialty_care', col: 0, order: 1, type: 'source', label: ['Specialty', 'Care'], value: 4.8, notes: ['+8% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'oncology', col: 0, order: 2, type: 'source', label: 'Oncology', value: 4.4, notes: ['+9% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'business_innovation', col: 1, order: 1, type: 'source', label: ['Business', 'innovation'], value: 0.4, notes: ['+26% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'biopharma', col: 1, order: 0, type: 'hub', label: 'Biopharma', value: 17.1, notes: ['(2%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 17.6, notes: ['(1%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.3, notes: ['70% margin', '+3pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: ['Cost', 'of sales'], value: 5.3 },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -1.6, notes: ['(9%) Y/Y', '(9pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 13.9 },
      { id: 'other', col: 6, order: 0, type: 'cost', label: 'Other', value: 5.1, notes: ['29% of revenue', '+12pp Y/Y'] },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: 'SG&A', value: 4.2, notes: ['24% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 3.4, notes: ['19% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 6, order: 3, type: 'cost', label: 'Amortization', value: 1.2, notes: ['7% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'primary_care', target: 'biopharma', value: 7.9, sourceWidth: 136, targetWidth: 136, y0: 639, y1: 748, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'specialty_care', target: 'biopharma', value: 4.8, sourceWidth: 82, targetWidth: 82, y0: 888, y1: 858, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'oncology', target: 'biopharma', value: 4.4, sourceWidth: 76, targetWidth: 76, y0: 1105, y1: 937, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'biopharma', target: 'revenue', value: 17.1, sourceWidth: 295, targetWidth: 295, y0: 828, y1: 909, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'business_innovation', target: 'revenue', value: 0.4, sourceWidth: 7, targetWidth: 7, y0: 1264.5, y1: 1059.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.3, sourceWidth: 211, targetWidth: 211, y0: 866.5, y1: 790.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 5.3, sourceWidth: 91, targetWidth: 91, y0: 1017.5, y1: 1125.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.3, sourceWidth: 211, targetWidth: 211, y0: 790.5, y1: 887.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 1.6, sourceWidth: 27, targetWidth: 30, y0: 1057.5, y1: 1008, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 5.1, sourceWidth: 88, targetWidth: 88, y0: 826, y1: 577, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.2, sourceWidth: 65, targetWidth: 65, y0: 902.5, y1: 792.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.4, sourceWidth: 58, targetWidth: 58, y0: 964, y1: 991, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 1.2, sourceWidth: 30, targetWidth: 22, y0: 1008, y1: 1195, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '辉瑞 · 2025 财年第四季度',
        meta: { title: '辉瑞 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleSize: 116, titleTextLength: 1860 },
        nodes: {
          primary_care: { label: ['初级', '医疗'], notes: ['同比 (11%)'] }, specialty_care: { label: ['专科', '医疗'], notes: ['同比 +8%'] }, oncology: { label: '肿瘤', notes: ['同比 +9%'] }, business_innovation: { label: ['业务', '创新'], notes: ['同比 +26%'] },
          biopharma: { label: '生物制药', notes: ['同比 (2%)'] }, revenue: { label: '收入', notes: ['同比 (1%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 70%', '同比 +3 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_loss: { label: ['营业', '亏损'], notes: ['同比 (9%)', '同比 (9 个百分点)'] }, operating_expenses: { label: '营业费用' },
          other: { label: '其他', notes: ['占收入 29%', '同比 +12 个百分点'] }, sga: { label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 (0 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 19%', '同比 +1 个百分点'] }, amortization: { label: '摊销', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

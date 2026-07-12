/* Pfizer Q1 FY26 income statement ($B), measured against the local reference. */
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
const revenueAnnotation = (zh = false) => `
  <g class="sankey-interactive-annotation" data-node="revenue">
    <text x="1245" y="518" text-anchor="middle" font-size="40" font-weight="600" fill="${PURPLE}">${zh ? '收入' : 'Revenue'}</text>
    <text x="1245" y="570" text-anchor="middle" font-size="39" font-weight="400" fill="${PURPLE}">$14.5B</text>
    <text x="1245" y="611" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${zh ? '同比 +5%' : '+5% Y/Y'}</text>
    <rect x="1115" y="470" width="260" height="150" fill="#ffffff" fill-opacity="0" pointer-events="all"/>
  </g>`;

  const zhLayoutLabels = {
    primary_care: { blocks: [
      { x: 499, top: 356, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (3%)', size: 28, weight: 400, color: NOTE }] },
      { x: 335, top: 476, anchor: 'middle', lineGap: 4, lines: [{ text: '初级', size: 39, weight: 600 }, { text: '医疗', size: 39, weight: 600 }] },
    ] },
    specialty_care: { blocks: [
      { x: 499, top: 650, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +12%', size: 28, weight: 400, color: NOTE }] },
      { x: 330, top: 737, anchor: 'middle', lineGap: 4, lines: [{ text: '专科', size: 39, weight: 600 }, { text: '医疗', size: 39, weight: 600 }] },
    ] },
    oncology: { blocks: [
      { x: 499, top: 880, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +10%', size: 28, weight: 400, color: NOTE }] },
      { x: 370, top: 1001, anchor: 'middle', lines: [{ text: '肿瘤', size: 39, weight: 600 }] },
    ] },
    hospital_biosimilars: { blocks: [
      { x: 499, top: 1132, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +13%', size: 28, weight: 400, color: NOTE }] },
      { x: 335, top: 1203, anchor: 'middle', lineGap: 4, lines: [{ text: '医院及', size: 39, weight: 600 }, { text: '生物类似药', size: 39, weight: 600 }] },
    ] },
    business_innovation: { blocks: [{ x: 873, top: 1050, anchor: 'middle', lineGap: 4, lines: [{ text: '业务', size: 39, weight: 600 }, { text: '创新', size: 39, weight: 600 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +6%', size: 28, weight: 400, color: NOTE }] }] },
    biopharma: { blocks: [{ x: 873, top: 484, anchor: 'middle', lineGap: 8, lines: [{ text: '生物制药', size: 40, weight: 600 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +5%', size: 28, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [] },
    gross_profit: { blocks: [{ x: 1618, top: 447, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 600 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 75%', size: 28, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1618, top: 1198, anchor: 'middle', lineGap: 5, lines: [{ text: '销售', size: 35, weight: 600 }, { text: '成本', size: 35, weight: 600 }, { text: '$value', size: 35, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1993, top: 342, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 39, weight: 600 }, { text: '$3.2M', size: 39, weight: 400 }, { text: '利润率 22%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1993, top: 1024, anchor: 'middle', lineGap: 5, lines: [{ text: '营业', size: 39, weight: 600 }, { text: '费用', size: 39, weight: 600 }, { text: '$value', size: 39, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 384, anchor: 'start', lineGap: 6, lines: [{ text: '净利润', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '同比 19%', size: 28, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    tax_and_other: { blocks: [{ x: RIGHT_X, top: 658, anchor: 'start', lineGap: 6, lines: [{ text: '税费及其他', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 756, anchor: 'start', lineGap: 6, lines: [{ text: '销售、一般及', size: 31, weight: 600 }, { text: '行政费用', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 20%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 941, anchor: 'start', lineGap: 6, lines: [{ text: '研发', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 18%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    amortization: { blocks: [{ x: RIGHT_X, top: 1124, anchor: 'start', lineGap: 6, lines: [{ text: '摊销', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 8%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: RIGHT_X, top: 1306, anchor: 'start', lineGap: 6, lines: [{ text: '其他', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pfizer-q1-fy26', name: 'Pfizer · Q1 FY26', company: 'Pfizer',
    meta: {
      company: 'Pfizer', title: 'Pfizer Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pfizer-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2150, hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        // These interfaces are continuous Sankey faces; source-image raster
        // residuals must not turn a short candidate face into a pass.
        fullFaceIds: [
          'revenue:left', 'revenue:right',
          'gross_profit:left', 'gross_profit:right',
          'cost_of_sales:left',
          'operating_profit:left', 'operating_profit:right',
          'operating_expenses:left',
        ],
      },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/pfizer/pfizer-q1-company-wordmark.png', x: 780, y: 210, width: 700, height: 260 },
      { key: 'primary-care-products', href: 'data/assets/raster-annotations/pfizer/pfizer-q1-primary-care-products.png', x: 0, y: 360, width: 225, height: 265 },
      { key: 'specialty-care-vyndaqel', href: 'data/assets/raster-annotations/pfizer/pfizer-q1-specialty-care-vyndaqel.png', x: 0, y: 710, width: 225, height: 135 },
      { key: 'oncology-ibrance', href: 'data/assets/raster-annotations/pfizer/pfizer-q1-oncology-ibrance.png', x: 0, y: 965, width: 220, height: 135 },
    ],
    annotationsSvg: revenueAnnotation(),
    layout: {
      scale: 24.4,
      nodes: {
        primary_care: { x: 463, y: 443, width: 72, height: 134 }, specialty_care: { x: 463, y: 737, width: 72, height: 71 }, oncology: { x: 463, y: 967, width: 72, height: 93 }, hospital_biosimilars: { x: 463, y: 1219, width: 72, height: 46 },
        biopharma: { x: 836, y: 624, width: 73, height: 345 }, business_innovation: { x: 836, y: 1246, width: 73, height: 7 }, revenue: { x: 1209, y: 624, width: 73, height: 352 },
        gross_profit: { x: 1582, y: 630, width: 72, height: 266 }, cost_of_sales: { x: 1582, y: 1080, width: 72, height: 85 },
        operating_profit: { x: 1957, y: 526, width: 73, height: 78 }, operating_expenses: { x: 1957, y: 814, width: 73, height: 188 },
        net_profit: { x: 2331, y: 410, width: 73, height: 66 }, tax_and_other: { x: 2331, y: 683, width: 73, height: 12 }, sga: { x: 2331, y: 754, width: 73, height: 73 }, rnd: { x: 2331, y: 952, width: 73, height: 63 }, amortization: { x: 2331, y: 1134, width: 73, height: 29 }, other: { x: 2331, y: 1324, width: 73, height: 24 },
      },
      labels: {
        primary_care: { blocks: [{ x: 499, top: 356, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 335, top: 476, anchor: 'middle', lineGap: 4, lines: [{ text: 'Primary', size: 39, weight: 600 }, { text: 'Care', size: 39, weight: 600 }] }] },
        specialty_care: { blocks: [{ x: 499, top: 650, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 330, top: 737, anchor: 'middle', lineGap: 4, lines: [{ text: 'Specialty', size: 39, weight: 600 }, { text: 'Care', size: 39, weight: 600 }] }] },
        oncology: { blocks: [{ x: 499, top: 880, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 370, top: 1001, anchor: 'middle', lines: [{ text: 'Oncology', size: 39, weight: 600 }] }] },
        hospital_biosimilars: { blocks: [{ x: 499, top: 1132, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 335, top: 1203, anchor: 'middle', lineGap: 4, lines: [{ text: 'Hospital', size: 39, weight: 600 }, { text: '& Biosimilars', size: 39, weight: 600 }] }] },
        business_innovation: { blocks: [{ x: 873, top: 1050, anchor: 'middle', lineGap: 4, lines: [{ text: 'Business', size: 39, weight: 600 }, { text: 'innovation', size: 39, weight: 600 }, { text: '$value', size: 39, weight: 400 }, { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        biopharma: { blocks: [{ x: 873, top: 484, anchor: 'middle', lineGap: 8, lines: [{ text: 'Biopharma', size: 40, weight: 600 }, { text: '$value', size: 39, weight: 400 }, { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        revenue: { blocks: [] },
        gross_profit: { blocks: [{ x: 1618, top: 447, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 600 }, { text: '$value', size: 39, weight: 400 }, { text: '75% margin', size: 28, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1618, top: 1198, anchor: 'middle', lineGap: 5, lines: [{ text: 'Cost', size: 35, weight: 600 }, { text: 'of sales', size: 35, weight: 600 }, { text: '$value', size: 35, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1993, top: 342, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 39, weight: 600 }, { text: '$3.2M', size: 39, weight: 400 }, { text: '22% margin', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1993, top: 1024, anchor: 'middle', lineGap: 5, lines: [{ text: 'Operating', size: 39, weight: 600 }, { text: 'expenses', size: 39, weight: 600 }, { text: '$value', size: 39, weight: 400 }] }] },
        net_profit: { blocks: [{ x: RIGHT_X, top: 384, anchor: 'start', lineGap: 6, lines: [{ text: 'Net profit', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '19% Y/Y', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        tax_and_other: { blocks: [{ x: RIGHT_X, top: 658, anchor: 'start', lineGap: 6, lines: [{ text: 'Tax & other', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 756, anchor: 'start', lineGap: 6, lines: [{ text: 'SG&A', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '20% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_X, top: 941, anchor: 'start', lineGap: 6, lines: [{ text: 'R&D', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '18% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        amortization: { blocks: [{ x: RIGHT_X, top: 1124, anchor: 'start', lineGap: 6, lines: [{ text: 'Amortization', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }, { text: '8% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        other: { blocks: [{ x: RIGHT_X, top: 1306, anchor: 'start', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 600 }, { text: '$value', size: 31, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'primary_care', col: 0, order: 0, type: 'source', label: ['Primary', 'Care'], value: 5.5, notes: ['(3%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'specialty_care', col: 0, order: 1, type: 'source', label: ['Specialty', 'Care'], value: 2.9, notes: ['+12% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'oncology', col: 0, order: 2, type: 'source', label: 'Oncology', value: 3.8, notes: ['+10% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'hospital_biosimilars', col: 0, order: 3, type: 'source', label: ['Hospital', '& Biosimilars'], value: 1.9, notes: ['+13% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'biopharma', col: 1, order: 0, type: 'hub', label: 'Biopharma', value: 14.2, notes: ['+5% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'business_innovation', col: 1, order: 1, type: 'source', label: ['Business', 'innovation'], value: 0.3, notes: ['+6% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.5, notes: ['+5% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.9, notes: ['75% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: ['Cost', 'of sales'], value: 3.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.2, notes: ['22% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.7, notes: ['19% Y/Y', '(3pp) Y/Y'] },
      { id: 'tax_and_other', col: 5, order: 1, type: 'cost', label: 'Tax & other', value: 0.5 },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 3.0, notes: ['20% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.6, notes: ['18% of revenue', '+2pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: 'Amortization', value: 1.2, notes: ['8% of revenue', '(1pp) Y/Y'] },
      { id: 'other', col: 5, order: 5, type: 'cost', label: 'Other', value: 1.0 },
    ],
    links: [
      { source: 'primary_care', target: 'biopharma', value: 5.5, sourceWidth: 134, targetWidth: 134, y0: 510, y1: 691, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'specialty_care', target: 'biopharma', value: 2.9, sourceWidth: 71, targetWidth: 71, y0: 772.5, y1: 793.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'oncology', target: 'biopharma', value: 3.8, sourceWidth: 93, targetWidth: 93, y0: 1013.5, y1: 875.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'hospital_biosimilars', target: 'biopharma', value: 1.9, sourceWidth: 46, targetWidth: 46, y0: 1242, y1: 945, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'biopharma', target: 'revenue', value: 14.2, sourceWidth: 345, targetWidth: 345, y0: 796.5, y1: 796.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'business_innovation', target: 'revenue', value: 0.3, sourceWidth: 7, targetWidth: 7, y0: 1249.5, y1: 972.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 10.9, sourceWidth: 266, targetWidth: 266, y0: 757, y1: 763, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.5, sourceWidth: 86, targetWidth: 85, y0: 933, y1: 1122.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.2, sourceWidth: 76, targetWidth: 78, y0: 668, y1: 565, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.7, sourceWidth: 190, targetWidth: 188, y0: 801, y1: 908, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.7, sourceWidth: 66, targetWidth: 66, y0: 559, y1: 443, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_and_other', value: 0.5, sourceWidth: 12, targetWidth: 12, y0: 598, y1: 689, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.0, sourceWidth: 73, targetWidth: 73, y0: 850.5, y1: 790.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.6, sourceWidth: 63, targetWidth: 63, y0: 918.5, y1: 983.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 1.2, sourceWidth: 29, targetWidth: 16, y0: 964.5, y1: 1155, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 1.0, sourceWidth: 24, targetWidth: 24, y0: 990, y1: 1336, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '辉瑞 · 2026 财年第一季度',
        meta: { title: '辉瑞 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度', titleSize: 116, titleTextLength: 1860, hidePeriodStamp: true },
        annotationsSvg: revenueAnnotation(true),
        nodes: {
          primary_care: { label: ['初级', '医疗'], notes: ['同比 (3%)'] }, specialty_care: { label: ['专科', '医疗'], notes: ['同比 +12%'] }, oncology: { label: '肿瘤', notes: ['同比 +10%'] }, hospital_biosimilars: { label: ['医院及', '生物类似药'], notes: ['同比 +13%'] },
          business_innovation: { label: ['业务', '创新'], notes: ['同比 +6%'] }, biopharma: { label: '生物制药', notes: ['同比 +5%'] }, revenue: { label: '收入', notes: ['同比 +5%'] }, gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 (4 个百分点)'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 22%', '同比 +2 个百分点'] }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['同比 19%', '同比 (3 个百分点)'] }, tax_and_other: { label: '税费及其他' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 20%', '同比 (2 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 18%', '同比 +2 个百分点'] }, amortization: { label: '摊销', notes: ['占收入 8%', '同比 (1 个百分点)'] }, other: { label: '其他' },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

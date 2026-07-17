/* Xiaomi Q3 FY25 income statement — source-bound fixed Sankey layout. */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#ed722e';
  const ORANGE_LABEL = '#ff6900';
  const ORANGE_LINK = '#efb89a';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const PALE_RED_FACE = '#e2c0c0';
  const NOTE = '#666666';

  const annotations = (unitText) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="82" y="296" font-size="38" font-weight="800" fill="${TITLE}">${unitText}</text>
    </g>`;

  const labelText = {
    en: {
      smartphones: 'Smartphones',
      smartphonesYoy: '(3%) Y/Y',
      iot: 'IoT & Lifestyle',
      iotYoy: '+6% Y/Y',
      internet1: 'Internet',
      internet2: 'Services',
      internetYoy: '+11% Y/Y',
      other: 'Other',
      otherSegmentYoy: '+53% Y/Y',
      aiot1: 'Smartphones',
      aiot2: 'x AIoT',
      aiotYoy: '+2% Y/Y',
      ev1: 'Smart EV,',
      ev2: 'AI and other',
      evYoy: '+199% Y/Y',
      revenue: 'Revenue',
      revenueLower: 'revenue',
      revenueYoy: '+22% Y/Y',
      grossProfit: 'Gross profit',
      grossMargin: '23% margin',
      grossYoy: '+3pp Y/Y',
      costOf: 'Cost of',
      operatingProfit: 'Operating profit',
      operatingMargin: '13% margin',
      operatingYoy: '+7pp Y/Y',
      operating1: 'Operating',
      operating2: 'expenses',
      netProfit: 'Net profit',
      netMargin: '11% margin',
      netYoy: '+5pp Y/Y',
      tax: 'Tax (2.7B)',
      otherAfter: 'Other (0.2B)',
      sm1: 'Sales &',
      sm2: 'marketing (9.1B)',
      smRev: '8% of revenue',
      rnd1: 'Research &',
      rnd2: 'development (8.3B)',
      rndRev: '7% of revenue',
      ga1: 'General &',
      ga2: 'Administrative (1.8B)',
      gaRev: '2% of revenue',
    },
    zh: {
      smartphones: '智能手机',
      smartphonesYoy: '同比 (3%)',
      iot: 'IoT 与生活消费',
      iotYoy: '同比 +6%',
      internet1: '互联网',
      internet2: '服务',
      internetYoy: '同比 +11%',
      other: '其他',
      otherSegmentYoy: '同比 +53%',
      aiot1: '智能手机',
      aiot2: '与智能物联',
      aiotYoy: '同比 +2%',
      ev1: '智能电动汽车、',
      ev2: 'AI 及其他',
      evYoy: '同比 +199%',
      revenue: '收入',
      revenueLower: '成本',
      revenueYoy: '同比 +22%',
      grossProfit: '毛利润',
      grossMargin: '毛利率 23%',
      grossYoy: '同比 +3 个百分点',
      costOf: '收入',
      operatingProfit: '营业利润',
      operatingMargin: '利润率 13%',
      operatingYoy: '同比 +7 个百分点',
      operating1: '营业',
      operating2: '费用',
      netProfit: '净利润',
      netMargin: '净利率 11%',
      netYoy: '同比 +5 个百分点',
      tax: '税费 (2.7B)',
      otherAfter: '其他 (0.2B)',
      sm1: '销售与',
      sm2: '营销 (9.1B)',
      smRev: '占收入 8%',
      rnd1: '研究与',
      rnd2: '开发 (8.3B)',
      rndRev: '占收入 7%',
      ga1: '一般及',
      ga2: '行政 (1.8B)',
      gaRev: '占收入 2%',
    },
  };

  const makeLabels = (L) => ({
    smartphones: {
      blocks: [
        { x: 401, top: 446, anchor: 'middle', lineGap: 9, lines: [
          { text: '46.0B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.smartphonesYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 209, top: 595.5, anchor: 'middle', lines: [
          { text: L.smartphones, size: 42, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    iot_lifestyle: {
      blocks: [
        { x: 401, top: 741, anchor: 'middle', lineGap: 9, lines: [
          { text: '27.6B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.iotYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 202, top: 858.5, anchor: 'middle', lines: [
          { text: L.iot, size: 40, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    internet_services: {
      blocks: [
        { x: 402, top: 978, anchor: 'middle', lineGap: 9, lines: [
          { text: '9.4B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.internetYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 260, top: 1041, anchor: 'middle', lineGap: 2, lines: [
          { text: L.internet1, size: 40, weight: 800, color: ORANGE_LABEL },
          { text: L.internet2, size: 40, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    other_segment: {
      blocks: [
        { x: 402, top: 1137, anchor: 'middle', lineGap: 9, lines: [
          { text: '1.2B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.otherSegmentYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 286, top: 1230, anchor: 'middle', lines: [
          { text: L.other, size: 40, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    smartphones_aiot: {
      blocks: [{ x: 776, top: 438, anchor: 'middle', lineGap: 6, lines: [
        { text: L.aiot1, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: L.aiot2, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: '84.1B', size: 38, weight: 400, color: ORANGE_LABEL },
        { text: L.aiotYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    smart_ev_ai_other: {
      blocks: [{ x: 773, top: 1264.5, anchor: 'middle', lineGap: 4, lines: [
        { text: L.ev1, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: L.ev2, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: '29.0B', size: 38, weight: 400, color: ORANGE_LABEL },
        { text: L.evYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    revenue: {
      blocks: [{ x: 1146, top: 584, anchor: 'middle', lineGap: 9, lines: [
        { text: L.revenue, size: 42, weight: 800, color: ORANGE_LABEL },
        { text: '113.1B', size: 39, weight: 400, color: ORANGE_LABEL },
        { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1527, top: 454, anchor: 'middle', lineGap: 8, lines: [
        { text: L.grossProfit, size: 38, weight: 800, color: GREEN_LABEL },
        { text: '25.9B', size: 39, weight: 400, color: GREEN_LABEL },
        { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
        { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1516, top: 1252, anchor: 'middle', lineGap: 8, lines: [
        { text: L.costOf, size: 38, weight: 800, color: RED_LABEL },
        { text: L.revenueLower, size: 38, weight: 800, color: RED_LABEL },
        { text: '(87.2B)', size: 39, weight: 400, color: RED_LABEL },
      ] }],
    },
    other_operating_income: {
      blocks: [{ x: 1789, top: 650.5, anchor: 'middle', lineGap: 4, lines: [
        { text: L.other, size: 36, weight: 800, color: GREEN_LABEL },
        { text: '8.4B', size: 34, weight: 400, color: GREEN_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1901, top: 346, anchor: 'middle', lineGap: 7, lines: [
        { text: L.operatingProfit, size: 38, weight: 800, color: GREEN_LABEL },
        { text: '15.1B', size: 39, weight: 400, color: GREEN_LABEL },
        { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
        { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1890, top: 868, anchor: 'middle', lineGap: 10, lines: [
        { text: L.operating1, size: 39, weight: 800, color: RED_LABEL },
        { text: L.operating2, size: 39, weight: 800, color: RED_LABEL },
        { text: '(19.2B)', size: 37, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: 2423, top: 426, anchor: 'middle', lineGap: 7, lines: [
        { text: L.netProfit, size: 38, weight: 800, color: GREEN_LABEL },
        { text: '12.3B', size: 39, weight: 400, color: GREEN_LABEL },
        { text: L.netMargin, size: 29, weight: 400, color: NOTE },
        { text: L.netYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: 2328, top: 665, anchor: 'start', lines: [
        { text: L.tax, size: 29, weight: 800, color: RED_LABEL },
      ] }],
    },
    other_after_operating: {
      blocks: [{ x: 2329, top: 764, anchor: 'start', lines: [
        { text: L.otherAfter, size: 29, weight: 800, color: RED_LABEL },
      ] }],
    },
    sales_marketing: {
      blocks: [{ x: 2323, top: 863, anchor: 'start', lineGap: 5, lines: [
        { text: L.sm1, size: 31, weight: 800, color: RED_LABEL },
        { text: L.sm2, size: 31, weight: 800, color: RED_LABEL },
        { text: L.smRev, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    rnd: {
      blocks: [{ x: 2317, top: 1058, anchor: 'start', lineGap: 5, lines: [
        { text: L.rnd1, size: 31, weight: 800, color: RED_LABEL },
        { text: L.rnd2, size: 31, weight: 800, color: RED_LABEL },
        { text: L.rndRev, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    ga: {
      blocks: [{ x: 2317, top: 1235, anchor: 'start', lineGap: 5, lines: [
        { text: L.ga1, size: 31, weight: 800, color: RED_LABEL },
        { text: L.ga2, size: 31, weight: 800, color: RED_LABEL },
        { text: L.gaRev, size: 29, weight: 400, color: NOTE },
      ] }],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'xiaomi-q3-fy25',
    name: 'Xiaomi · Q3 FY25',
    company: 'Xiaomi',
    meta: {
      company: 'Xiaomi',
      title: 'Xiaomi Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/xiaomi-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2170,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE_LABEL },
        hub: { node: ORANGE, label: ORANGE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 37, value: 36, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations('in RMB'),
    rasterAnnotations: [
      { key: 'company-logo', href: 'data/assets/raster-annotations/xiaomi/company-logo.png', x: 972, y: 232, width: 346, height: 341 },
    ],
    layout: {
      nodes: {
        smartphones: { x: 364, y: 538, width: 71, height: 166 },
        iot_lifestyle: { x: 364, y: 833, width: 71, height: 100 },
        internet_services: { x: 364, y: 1072, width: 71, height: 33 },
        other_segment: { x: 364, y: 1253, width: 71, height: 3 },
        smartphones_aiot: { x: 738, y: 637, width: 70, height: 306 },
        smart_ev_ai_other: { x: 738, y: 1131, width: 70, height: 104 },
        revenue: { x: 1112, y: 727, width: 70, height: 414 },
        gross_profit: { x: 1485, y: 639, width: 71, height: 93 },
        cost_of_revenue: { x: 1485, y: 916, width: 71, height: 319 },
        other_operating_income: { x: 1753, y: 608, width: 70, height: 29 },
        operating_profit: { x: 1859, y: 530, width: 71, height: 54 },
        operating_expenses: { x: 1859, y: 778, width: 71, height: 68 },
        net_profit: { x: 2232, y: 472, width: 71, height: 42 },
        tax: { x: 2232, y: 677, width: 71, height: 7 },
        other_after_operating: { x: 2232, y: 779, width: 71, height: 1 },
        sales_marketing: { x: 2232, y: 883, width: 71, height: 31 },
        rnd: { x: 2232, y: 1076, width: 71, height: 29 },
        ga: { x: 2232, y: 1261, width: 71, height: 5 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'smartphones', col: 0, order: 0, type: 'source', label: 'Smartphones', value: 46.0, valueText: '46.0B', notes: ['(3%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'iot_lifestyle', col: 0, order: 1, type: 'source', label: 'IoT & Lifestyle', value: 27.6, valueText: '27.6B', notes: ['+6% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'internet_services', col: 0, order: 2, type: 'source', label: 'Internet Services', value: 9.4, valueText: '9.4B', notes: ['+11% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'other_segment', col: 0, order: 3, type: 'source', label: 'Other', value: 1.2, valueText: '1.2B', notes: ['+53% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'smartphones_aiot', col: 1, order: 0, type: 'source', label: ['Smartphones', 'x AIoT'], value: 84.1, valueText: '84.1B', notes: ['+2% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'smart_ev_ai_other', col: 1, order: 1, type: 'source', label: ['Smart EV,', 'AI and other'], value: 29.0, valueText: '29.0B', notes: ['+199% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 113.1, valueText: '113.1B', notes: ['+22% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 25.9, valueText: '25.9B', notes: ['23% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 87.2, valueText: '(87.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 8.4, valueText: '8.4B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 15.1, valueText: '15.1B', notes: ['13% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 19.2, valueText: '(19.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 12.3, valueText: '12.3B', notes: ['11% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 2.7, valueText: '(2.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_after_operating', col: 7, order: 2, type: 'cost', label: 'Other', value: 0.2, valueText: '(0.2B)', color: PALE_RED_FACE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 7, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 9.1, valueText: '(9.1B)', notes: ['8% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 4, type: 'cost', label: ['Research &', 'development'], value: 8.3, valueText: '(8.3B)', notes: ['7% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 5, type: 'cost', label: ['General &', 'Administrative'], value: 1.8, valueText: '(1.8B)', notes: ['2% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'smartphones', target: 'smartphones_aiot', value: 46.0, sourceWidth: 166, targetWidth: 167, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'iot_lifestyle', target: 'smartphones_aiot', value: 27.6, sourceWidth: 100, targetWidth: 101, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'internet_services', target: 'smartphones_aiot', value: 9.4, sourceWidth: 33, targetWidth: 35, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'other_segment', target: 'smartphones_aiot', value: 1.2, width: 3, sourceOrder: 0, targetOrder: 3, linkTint: ORANGE_LINK },
      { source: 'smartphones_aiot', target: 'revenue', value: 84.1, sourceWidth: 306, targetWidth: 310, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'smart_ev_ai_other', target: 'revenue', value: 29.0, width: 104, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 25.9, width: 93, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 87.2, sourceWidth: 321, targetWidth: 319, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 6.7, sourceWidth: 25, targetWidth: 25, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 19.2, width: 68, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_operating_income', target: 'operating_profit', value: 8.4, width: 29, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 12.3, sourceWidth: 44, targetWidth: 42, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.7, sourceWidth: 9, targetWidth: 7, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_after_operating', value: 0.2, width: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 9.1, sourceWidth: 32, targetWidth: 31, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 8.3, sourceWidth: 30, targetWidth: 29, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.8, sourceWidth: 6, targetWidth: 5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '小米 · 2025 财年第三季度',
        meta: {
          title: '小米 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1660,
        },
        annotationsSvg: annotations('单位：人民币'),
        nodes: {
          smartphones: { label: '智能手机', notes: ['同比 (3%)'] },
          iot_lifestyle: { label: 'IoT 与生活消费产品', notes: ['同比 +6%'] },
          internet_services: { label: '互联网服务', notes: ['同比 +11%'] },
          other_segment: { label: '其他', notes: ['同比 +53%'] },
          smartphones_aiot: { label: ['智能手机', '与智能物联'], notes: ['同比 +2%'] },
          smart_ev_ai_other: { label: ['智能电动汽车、', 'AI 及其他'], notes: ['同比 +199%'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 23%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +7 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['净利率 11%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          other_after_operating: { label: '其他' },
          sales_marketing: { label: ['销售与', '营销'], notes: ['占收入 8%'] },
          rnd: { label: ['研究与', '开发'], notes: ['占收入 7%'] },
          ga: { label: ['一般及', '行政'], notes: ['占收入 2%'] },
        },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

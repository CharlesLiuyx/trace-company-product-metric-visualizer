/* Xiaomi Q2 FY25 income statement — source-bound fixed Sankey layout. */
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
  const NOTE = '#666666';

  const annotations = (unitText) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="82" y="284" font-size="38" font-weight="800" fill="${TITLE}">${unitText}</text>
    </g>`;

  const labelText = {
    en: {
      smartphones: 'Smartphones',
      smartphonesYoy: '(2%) Y/Y',
      iot: 'IoT & Lifestyle',
      iotYoy: '(2%) Y/Y',
      internet1: 'Internet',
      internet2: 'Services',
      internetYoy: '(2%) Y/Y',
      other: 'Other',
      otherSegmentYoy: '(2%) Y/Y',
      aiot1: 'Smartphones',
      aiot2: 'x AIoT',
      aiotYoy: '+15% Y/Y',
      ev1: 'Smart EV,',
      ev2: 'AI and other',
      evYoy: '+234% Y/Y',
      revenue: 'Revenue',
      revenueLower: 'revenue',
      revenueYoy: '+30% Y/Y',
      grossProfit: 'Gross profit',
      grossMargin: '23% margin',
      grossYoy: '+1pp Y/Y',
      costOf: 'Cost of',
      operatingProfit: 'Operating profit',
      operatingMargin: '12% margin',
      operatingYoy: '+5pp Y/Y',
      operating1: 'Operating',
      operating2: 'expenses',
      netProfit: 'Net profit',
      netMargin: '10% margin',
      netYoy: '+4pp Y/Y',
      tax: 'Tax (2.5B)',
      sm1: 'Sales &',
      sm2: 'marketing (7.8B)',
      smRev: '7% of revenue',
      rnd1: 'Research &',
      rnd2: 'development (7.7B)',
      rndRev: '7% of revenue',
      ga1: 'General &',
      ga2: 'Administrative (1.6B)',
      gaRev: '4% of revenue',
    },
    zh: {
      smartphones: '智能手机',
      smartphonesYoy: '同比 (2%)',
      iot: 'IoT 与生活消费',
      iotYoy: '同比 (2%)',
      internet1: '互联网',
      internet2: '服务',
      internetYoy: '同比 (2%)',
      other: '其他',
      otherSegmentYoy: '同比 (2%)',
      aiot1: '智能手机',
      aiot2: '与智能物联',
      aiotYoy: '同比 +15%',
      ev1: '智能电动汽车、',
      ev2: 'AI 及其他',
      evYoy: '同比 +234%',
      revenue: '收入',
      revenueLower: '成本',
      revenueYoy: '同比 +30%',
      grossProfit: '毛利润',
      grossMargin: '毛利率 23%',
      grossYoy: '同比 +1 个百分点',
      costOf: '收入',
      operatingProfit: '营业利润',
      operatingMargin: '利润率 12%',
      operatingYoy: '同比 +5 个百分点',
      operating1: '营业',
      operating2: '费用',
      netProfit: '净利润',
      netMargin: '净利率 10%',
      netYoy: '同比 +4 个百分点',
      tax: '税费 (2.5B)',
      sm1: '销售与',
      sm2: '营销 (7.8B)',
      smRev: '占收入 7%',
      rnd1: '研究与',
      rnd2: '开发 (7.7B)',
      rndRev: '占收入 7%',
      ga1: '一般及',
      ga2: '行政 (1.6B)',
      gaRev: '占收入 4%',
    },
  };

  const makeLabels = (L) => ({
    smartphones: {
      blocks: [
        { x: 404, top: 388, anchor: 'middle', lineGap: 9, lines: [
          { text: '45.5B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.smartphonesYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 209, top: 523.5, anchor: 'middle', lines: [
          { text: L.smartphones, size: 42, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    iot_lifestyle: {
      blocks: [
        { x: 402, top: 682, anchor: 'middle', lineGap: 9, lines: [
          { text: '38.7B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.iotYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 202, top: 809.5, anchor: 'middle', lines: [
          { text: L.iot, size: 40, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    internet_services: {
      blocks: [
        { x: 402, top: 966, anchor: 'middle', lineGap: 9, lines: [
          { text: '9.1B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.internetYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 260, top: 1022.5, anchor: 'middle', lineGap: 2, lines: [
          { text: L.internet1, size: 40, weight: 800, color: ORANGE_LABEL },
          { text: L.internet2, size: 40, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    other_segment: {
      blocks: [
        { x: 402, top: 1161, anchor: 'middle', lineGap: 9, lines: [
          { text: '1.4B', size: 38, weight: 400, color: ORANGE_LABEL },
          { text: L.otherSegmentYoy, size: 29, weight: 400, color: NOTE },
        ] },
        { x: 282, top: 1223.5, anchor: 'middle', lines: [
          { text: L.other, size: 40, weight: 800, color: ORANGE_LABEL },
        ] },
      ],
    },
    smartphones_aiot: {
      blocks: [{ x: 776, top: 425, anchor: 'middle', lineGap: 6, lines: [
        { text: L.aiot1, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: L.aiot2, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: '94.7B', size: 38, weight: 400, color: ORANGE_LABEL },
        { text: L.aiotYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    smart_ev_ai_other: {
      blocks: [{ x: 773, top: 1270.5, anchor: 'middle', lineGap: 4, lines: [
        { text: L.ev1, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: L.ev2, size: 40, weight: 800, color: ORANGE_LABEL },
        { text: '21.3B', size: 38, weight: 400, color: ORANGE_LABEL },
        { text: L.evYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    revenue: {
      blocks: [{ x: 1146, top: 589, anchor: 'middle', lineGap: 9, lines: [
        { text: L.revenue, size: 42, weight: 800, color: ORANGE_LABEL },
        { text: '116.0B', size: 39, weight: 400, color: ORANGE_LABEL },
        { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1527, top: 434, anchor: 'middle', lineGap: 8, lines: [
        { text: L.grossProfit, size: 38, weight: 800, color: GREEN_LABEL },
        { text: '26.1B', size: 39, weight: 400, color: GREEN_LABEL },
        { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
        { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1516, top: 1238, anchor: 'middle', lineGap: 8, lines: [
        { text: L.costOf, size: 38, weight: 800, color: RED_LABEL },
        { text: L.revenueLower, size: 38, weight: 800, color: RED_LABEL },
        { text: '(89.9B)', size: 39, weight: 400, color: RED_LABEL },
      ] }],
    },
    other_operating_income: {
      blocks: [{ x: 1780, top: 634.5, anchor: 'middle', lineGap: 4, lines: [
        { text: L.other, size: 36, weight: 800, color: GREEN_LABEL },
        { text: '4.5B', size: 34, weight: 400, color: GREEN_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1901, top: 335, anchor: 'middle', lineGap: 7, lines: [
        { text: L.operatingProfit, size: 38, weight: 800, color: GREEN_LABEL },
        { text: '13.4B', size: 39, weight: 400, color: GREEN_LABEL },
        { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
        { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1890, top: 843, anchor: 'middle', lineGap: 10, lines: [
        { text: L.operating1, size: 39, weight: 800, color: RED_LABEL },
        { text: L.operating2, size: 39, weight: 800, color: RED_LABEL },
        { text: '(17.2B)', size: 37, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: 2423, top: 376, anchor: 'middle', lineGap: 7, lines: [
        { text: L.netProfit, size: 38, weight: 800, color: GREEN_LABEL },
        { text: '11.9B', size: 39, weight: 400, color: GREEN_LABEL },
        { text: L.netMargin, size: 29, weight: 400, color: NOTE },
        { text: L.netYoy, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: 2328, top: 645, anchor: 'start', lines: [
        { text: L.tax, size: 29, weight: 800, color: RED_LABEL },
      ] }],
    },
    other_after_operating: {
      blocks: [{ x: 2166, top: 514.5, anchor: 'middle', lineGap: 4, lines: [
        { text: L.other, size: 36, weight: 800, color: GREEN_LABEL },
        { text: '1.0B', size: 34, weight: 400, color: GREEN_LABEL },
      ] }],
    },
    sales_marketing: {
      blocks: [{ x: 2323, top: 821, anchor: 'start', lineGap: 5, lines: [
        { text: L.sm1, size: 31, weight: 800, color: RED_LABEL },
        { text: L.sm2, size: 31, weight: 800, color: RED_LABEL },
        { text: L.smRev, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    rnd: {
      blocks: [{ x: 2317, top: 1024, anchor: 'start', lineGap: 5, lines: [
        { text: L.rnd1, size: 31, weight: 800, color: RED_LABEL },
        { text: L.rnd2, size: 31, weight: 800, color: RED_LABEL },
        { text: L.rndRev, size: 29, weight: 400, color: NOTE },
      ] }],
    },
    ga: {
      blocks: [{ x: 2317, top: 1215, anchor: 'start', lineGap: 5, lines: [
        { text: L.ga1, size: 31, weight: 800, color: RED_LABEL },
        { text: L.ga2, size: 31, weight: 800, color: RED_LABEL },
        { text: L.gaRev, size: 29, weight: 400, color: NOTE },
      ] }],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'xiaomi-q2-fy25',
    name: 'Xiaomi · Q2 FY25',
    company: 'Xiaomi',
    meta: {
      company: 'Xiaomi',
      title: 'Xiaomi Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/xiaomi-q2-fy25.png', width: 2667, height: 1500 },
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
        smartphones: { x: 364, y: 476, width: 71, height: 146 },
        iot_lifestyle: { x: 364, y: 771, width: 71, height: 124 },
        internet_services: { x: 364, y: 1054, width: 71, height: 28 },
        other_segment: { x: 364, y: 1250, width: 71, height: 3 },
        smartphones_aiot: { x: 738, y: 621, width: 70, height: 307 },
        smart_ev_ai_other: { x: 738, y: 1174, width: 70, height: 68 },
        revenue: { x: 1112, y: 730, width: 70, height: 377 },
        gross_profit: { x: 1485, y: 617, width: 71, height: 84 },
        cost_of_revenue: { x: 1485, y: 925, width: 71, height: 290 },
        other_operating_income: { x: 1741, y: 609, width: 70, height: 12 },
        operating_profit: { x: 1859, y: 517, width: 71, height: 43 },
        operating_expenses: { x: 1859, y: 765, width: 71, height: 54 },
        other_after_operating: { x: 2128, y: 499, width: 73, height: 4 },
        net_profit: { x: 2232, y: 410, width: 71, height: 36 },
        tax: { x: 2232, y: 655, width: 71, height: 6 },
        sales_marketing: { x: 2232, y: 840, width: 71, height: 24 },
        rnd: { x: 2232, y: 1049, width: 71, height: 23 },
        ga: { x: 2232, y: 1255, width: 71, height: 3 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'smartphones', col: 0, order: 0, type: 'source', label: 'Smartphones', value: 45.5, valueText: '45.5B', notes: ['(2%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'iot_lifestyle', col: 0, order: 1, type: 'source', label: 'IoT & Lifestyle', value: 38.7, valueText: '38.7B', notes: ['(2%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'internet_services', col: 0, order: 2, type: 'source', label: 'Internet Services', value: 9.1, valueText: '9.1B', notes: ['(2%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'other_segment', col: 0, order: 3, type: 'source', label: 'Other', value: 1.4, valueText: '1.4B', notes: ['(2%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'smartphones_aiot', col: 1, order: 0, type: 'source', label: ['Smartphones', 'x AIoT'], value: 94.7, valueText: '94.7B', notes: ['+15% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'smart_ev_ai_other', col: 1, order: 1, type: 'source', label: ['Smart EV,', 'AI and other'], value: 21.3, valueText: '21.3B', notes: ['+234% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 116.0, valueText: '116.0B', notes: ['+30% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 26.1, valueText: '26.1B', notes: ['23% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 89.9, valueText: '(89.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 4.5, valueText: '4.5B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 13.4, valueText: '13.4B', notes: ['12% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.2, valueText: '(17.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_after_operating', col: 6, order: 0, type: 'profit', label: 'Other', value: 1.0, valueText: '1.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 11.9, valueText: '11.9B', notes: ['10% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 2.5, valueText: '(2.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 7, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 7.8, valueText: '(7.8B)', notes: ['7% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 3, type: 'cost', label: ['Research &', 'development'], value: 7.7, valueText: '(7.7B)', notes: ['7% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 1.6, valueText: '(1.6B)', notes: ['4% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'smartphones', target: 'smartphones_aiot', value: 45.5, sourceWidth: 146, targetWidth: 147, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'iot_lifestyle', target: 'smartphones_aiot', value: 38.7, sourceWidth: 124, targetWidth: 126, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'internet_services', target: 'smartphones_aiot', value: 9.1, sourceWidth: 28, targetWidth: 29, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'other_segment', target: 'smartphones_aiot', value: 1.4, sourceWidth: 3, targetWidth: 5, sourceOrder: 0, targetOrder: 3, linkTint: ORANGE_LINK },
      { source: 'smartphones_aiot', target: 'revenue', value: 94.7, sourceWidth: 307, targetWidth: 308, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'smart_ev_ai_other', target: 'revenue', value: 21.3, sourceWidth: 68, targetWidth: 69, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 26.1, sourceWidth: 85, targetWidth: 84, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 89.9, sourceWidth: 292, targetWidth: 290, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 8.9, sourceWidth: 30, targetWidth: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.2, sourceWidth: 54, targetWidth: 54, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_operating_income', target: 'operating_profit', value: 4.5, sourceWidth: 12, targetWidth: 14, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 10.9, sourceWidth: 35, targetWidth: 34, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_after_operating', target: 'net_profit', value: 1.0, sourceWidth: 4, targetWidth: 2, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.5, sourceWidth: 8, targetWidth: 6, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 7.8, sourceWidth: 25, targetWidth: 24, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 7.7, sourceWidth: 24, targetWidth: 23, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.6, sourceWidth: 5, targetWidth: 3, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '小米 · 2025 财年第二季度',
        meta: {
          title: '小米 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          titleTextLength: 1660,
        },
        annotationsSvg: annotations('单位：人民币'),
        nodes: {
          smartphones: { label: '智能手机', notes: ['同比 (2%)'] },
          iot_lifestyle: { label: 'IoT 与生活消费产品', notes: ['同比 (2%)'] },
          internet_services: { label: '互联网服务', notes: ['同比 (2%)'] },
          other_segment: { label: '其他', notes: ['同比 (2%)'] },
          smartphones_aiot: { label: ['智能手机', '与智能物联'], notes: ['同比 +15%'] },
          smart_ev_ai_other: { label: ['智能电动汽车、', 'AI 及其他'], notes: ['同比 +234%'] },
          revenue: { label: '收入', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 23%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['净利率 10%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          other_after_operating: { label: '其他' },
          sales_marketing: { label: ['销售与', '营销'], notes: ['占收入 7%'] },
          rnd: { label: ['研究与', '开发'], notes: ['占收入 7%'] },
          ga: { label: ['一般及', '行政'], notes: ['占收入 4%'] },
        },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

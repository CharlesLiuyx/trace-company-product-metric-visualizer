/* ====================================================================
 * Xiaomi - Q4 FY25 income statement (RMB B)
 * Reconstructed from input/processed/xiaomi-q4-fy25.png as a fixed
 * d3-sankey layout with whitelisted company-logo and product-cluster
 * raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#f26d2a';
  const ORANGE_LABEL = '#ff5f00';
  const ORANGE_LINK = '#efb690';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#8f1005';
  const RED_LINK = '#df8181';
  const NOTE = '#7e7e7e';

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="83" y="282" font-size="41" font-weight="800" fill="${TITLE}">${L.inRmb}</text>
    </g>`;

  const annotationsEn = annotations({
    inRmb: 'in RMB',
  });

  const annotationsZh = annotations({
    inRmb: '单位：人民币',
  });

  const labelBlocks = (L) => ({
    smartphones: {
      blocks: [
        {
          x: 400, top: 410, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '44.3B', size: 38, weight: 400, color: ORANGE_LABEL },
            { text: L.smartphonesYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 179, top: 566, anchor: 'middle', lines: [{ text: L.smartphones, size: 42, weight: 800, color: ORANGE_LABEL }] },
      ],
    },
    iot_lifestyle: {
      blocks: [
        {
          x: 399, top: 695, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '24.6B', size: 38, weight: 400, color: ORANGE_LABEL },
            { text: L.iotYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 179, top: 813, anchor: 'middle', lines: [{ text: L.iot, size: 40, weight: 800, color: ORANGE_LABEL }] },
      ],
    },
    internet_services: {
      blocks: [
        {
          x: 400, top: 906, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '9.9B', size: 38, weight: 400, color: ORANGE_LABEL },
            { text: L.internetYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 214, top: 976, anchor: 'middle', lineGap: 2,
          lines: [
            { text: L.internet1, size: 40, weight: 800, color: ORANGE_LABEL },
            { text: L.internet2, size: 40, weight: 800, color: ORANGE_LABEL },
          ],
        },
      ],
    },
    other_segment: {
      blocks: [
        {
          x: 400, top: 1073, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '0.9B', size: 38, weight: 400, color: ORANGE_LABEL },
            { text: L.otherSegYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 258, top: 1148, anchor: 'middle', lines: [{ text: L.other, size: 40, weight: 800, color: ORANGE_LABEL }] },
      ],
    },
    smartphones_aiot: {
      blocks: [
        {
          x: 774, top: 421, anchor: 'middle', lineGap: 6,
          lines: [
            { text: L.aiot1, size: 40, weight: 800, color: ORANGE_LABEL },
            { text: L.aiot2, size: 40, weight: 800, color: ORANGE_LABEL },
            { text: '79.7B', size: 38, weight: 400, color: ORANGE_LABEL },
            { text: L.aiotYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    smart_ev_ai_other: {
      blocks: [
        {
          x: 782, top: 1249, anchor: 'middle', lineGap: 4,
          lines: [
            { text: L.ev1, size: 40, weight: 800, color: ORANGE_LABEL },
            { text: L.ev2, size: 40, weight: 800, color: ORANGE_LABEL },
            { text: '37.2B', size: 38, weight: 400, color: ORANGE_LABEL },
            { text: L.evYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1147, top: 592, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.revenue, size: 42, weight: 800, color: ORANGE_LABEL },
            { text: '116.9B', size: 39, weight: 400, color: ORANGE_LABEL },
            { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1521, top: 436, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.grossProfit, size: 38, weight: 800, color: GREEN_LABEL },
            { text: '24.4B', size: 39, weight: 400, color: GREEN_LABEL },
            { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
            { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1521, top: 1240, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.costOf, size: 38, weight: 800, color: RED_LABEL },
            { text: L.revenueLower, size: 38, weight: 800, color: RED_LABEL },
            { text: '(92.6B)', size: 39, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    other_operating_income: {
      blocks: [
        {
          x: 1788, top: 610, anchor: 'middle', lineGap: 4,
          lines: [
            { text: L.other, size: 36, weight: 800, color: GREEN_LABEL },
            { text: '3.0B', size: 34, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1904, top: 325, anchor: 'middle', lineGap: 7,
          lines: [
            { text: L.operatingProfit, size: 38, weight: 800, color: GREEN_LABEL },
            { text: '6.2B', size: 39, weight: 400, color: GREEN_LABEL },
            { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
            { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1888, top: 862, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.operating1, size: 39, weight: 800, color: RED_LABEL },
            { text: L.operating2, size: 39, weight: 800, color: RED_LABEL },
            { text: '(21.2B)', size: 37, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    other_after_operating: {
      blocks: [
        {
          x: 2164, top: 512, anchor: 'middle', lineGap: 5,
          lines: [
            { text: L.other, size: 34, weight: 800, color: GREEN_LABEL },
            { text: '0.9B', size: 33, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2330, top: 640, anchor: 'start',
          lines: [{ text: L.tax, size: 29, weight: 800, color: RED_LABEL }],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2410, top: 386, anchor: 'middle', lineGap: 7,
          lines: [
            { text: L.netProfit, size: 38, weight: 800, color: GREEN_LABEL },
            { text: '6.5B', size: 39, weight: 400, color: GREEN_LABEL },
            { text: L.netMargin, size: 29, weight: 400, color: NOTE },
            { text: L.netYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sales_marketing: {
      blocks: [
        {
          x: 2328, top: 787, anchor: 'start', lineGap: 5,
          lines: [
            { text: L.sm1, size: 31, weight: 800, color: RED_LABEL },
            { text: L.sm2, size: 31, weight: 800, color: RED_LABEL },
            { text: L.smRev, size: 29, weight: 400, color: NOTE },
            { text: L.smYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: 2328, top: 997, anchor: 'start', lineGap: 5,
          lines: [
            { text: L.rnd1, size: 31, weight: 800, color: RED_LABEL },
            { text: L.rnd2, size: 31, weight: 800, color: RED_LABEL },
            { text: L.rndRev, size: 29, weight: 400, color: NOTE },
            { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2328, top: 1190, anchor: 'start', lineGap: 5,
          lines: [
            { text: L.ga1, size: 31, weight: 800, color: RED_LABEL },
            { text: L.ga2, size: 31, weight: 800, color: RED_LABEL },
            { text: L.gaRev, size: 29, weight: 400, color: NOTE },
            { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  });

  const labelsEn = labelBlocks({
    smartphones: 'Smartphones',
    smartphonesYoy: '(14%) Y/Y',
    iot: 'IoT & Lifestyle',
    iotYoy: '(20%) Y/Y',
    internet1: 'Internet',
    internet2: 'Services',
    internetYoy: '+6% Y/Y',
    other: 'Other',
    otherSegYoy: '+6% Y/Y',
    aiot1: 'Smartphones',
    aiot2: 'x AIoT',
    aiotYoy: '(14%) Y/Y',
    ev1: 'Smart EV,',
    ev2: 'AI and other',
    evYoy: '+123% Y/Y',
    revenue: 'Revenue',
    revenueLower: 'revenue',
    revenueYoy: '+7% Y/Y',
    grossProfit: 'Gross profit',
    grossMargin: '21% margin',
    grossYoy: '+3pp Y/Y',
    costOf: 'Cost of',
    operatingProfit: 'Operating profit',
    operatingMargin: '5% margin',
    operatingYoy: '(2pp) Y/Y',
    operating1: 'Operating',
    operating2: 'expenses',
    tax: 'Tax (0.6B)',
    netProfit: 'Net profit',
    netMargin: '6% margin',
    netYoy: '(2pp) Y/Y',
    sm1: 'Sales &',
    sm2: 'marketing (9.9B)',
    smRev: '8% of revenue',
    smYoy: '+2pp Y/Y',
    rnd1: 'Research &',
    rnd2: 'development (9.6B)',
    rndRev: '8% of revenue',
    rndYoy: '+2pp Y/Y',
    ga1: 'General &',
    ga2: 'Administrative (1.6B)',
    gaRev: '1% of revenue',
    gaYoy: '+0pp Y/Y',
  });

  const labelsZh = labelBlocks({
    smartphones: '智能手机',
    smartphonesYoy: '同比 (14%)',
    iot: 'IoT 与生活消费',
    iotYoy: '同比 (20%)',
    internet1: '互联网',
    internet2: '服务',
    internetYoy: '同比 +6%',
    other: '其他',
    otherSegYoy: '同比 +6%',
    aiot1: '智能手机',
    aiot2: '与智能物联',
    aiotYoy: '同比 (14%)',
    ev1: '智能电动汽车、',
    ev2: 'AI 及其他',
    evYoy: '同比 +123%',
    revenue: '收入',
    revenueLower: '成本',
    revenueYoy: '同比 +7%',
    grossProfit: '毛利润',
    grossMargin: '毛利率 21%',
    grossYoy: '同比 +3 个百分点',
    costOf: '收入',
    operatingProfit: '营业利润',
    operatingMargin: '利润率 5%',
    operatingYoy: '同比 (2 个百分点)',
    operating1: '营业',
    operating2: '费用',
    tax: '税费 (0.6B)',
    netProfit: '净利润',
    netMargin: '净利率 6%',
    netYoy: '同比 (2 个百分点)',
    sm1: '销售与',
    sm2: '营销 (9.9B)',
    smRev: '占收入 8%',
    smYoy: '同比 +2 个百分点',
    rnd1: '研究与',
    rnd2: '开发 (9.6B)',
    rndRev: '占收入 8%',
    rndYoy: '同比 +2 个百分点',
    ga1: '一般及',
    ga2: '行政 (1.6B)',
    gaRev: '占收入 1%',
    gaYoy: '同比 +0 个百分点',
  });
  labelsZh.net_profit.blocks[0].x = 2422;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'xiaomi-q4-fy25',
    name: 'Xiaomi · Q4 FY25',
    company: 'Xiaomi',
    meta: {
      company: 'Xiaomi',
      title: 'Xiaomi Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/xiaomi-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2170,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE_LABEL },
        hub: { node: ORANGE, label: ORANGE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 37, value: 36, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      { key: 'company-logo', href: 'data/assets/raster-annotations/xiaomi/company-logo.png', x: 972, y: 232, width: 346, height: 341 },
      { key: 'smartphones-product-cluster', href: 'data/assets/raster-annotations/xiaomi/smartphones-product-cluster.png', x: 98, y: 392, width: 194, height: 156 },
      { key: 'iot-lifestyle-tablet-laptop', href: 'data/assets/raster-annotations/xiaomi/iot-lifestyle-tablet-laptop.png', x: 60, y: 680, width: 118, height: 108 },
      { key: 'iot-lifestyle-appliance', href: 'data/assets/raster-annotations/xiaomi/iot-lifestyle-appliance.png', x: 174, y: 666, width: 112, height: 144 },
      { key: 'iot-lifestyle-watch', href: 'data/assets/raster-annotations/xiaomi/iot-lifestyle-watch.png', x: 278, y: 686, width: 74, height: 114 },
      { key: 'smart-ev-car', href: 'data/assets/raster-annotations/xiaomi/smart-ev-car.png', x: 895, y: 1248, width: 298, height: 115 },
    ],

    layout: {
      nodes: {
        smartphones: { x: 364, y: 506, width: 71, height: 159 },
        iot_lifestyle: { x: 364, y: 789, width: 71, height: 88 },
        internet_services: { x: 364, y: 1000, width: 71, height: 35 },
        other_segment: { x: 364, y: 1168, width: 71, height: 4 },
        smartphones_aiot: { x: 737, y: 625, width: 72, height: 289 },
        smart_ev_ai_other: { x: 737, y: 1094, width: 72, height: 134 },
        revenue: { x: 1111, y: 732, width: 72, height: 425 },
        gross_profit: { x: 1485, y: 621, width: 71, height: 87 },
        cost_of_revenue: { x: 1485, y: 884, width: 71, height: 336 },
        other_operating_income: { x: 1753, y: 585, width: 71, height: 9 },
        operating_profit: { x: 1858, y: 523, width: 72, height: 24 },
        operating_expenses: { x: 1858, y: 760, width: 72, height: 76 },
        other_after_operating: { x: 2124, y: 500, width: 72, height: 4 },
        net_profit: { x: 2232, y: 420, width: 72, height: 25 },
        tax: { x: 2232, y: 648, width: 72, height: 2 },
        sales_marketing: { x: 2232, y: 805, width: 72, height: 35 },
        rnd: { x: 2232, y: 1019, width: 72, height: 35 },
        ga: { x: 2232, y: 1226, width: 72, height: 6 },
      },
      labels: labelsEn,
    },

    nodes: [
      { id: 'smartphones', col: 0, order: 0, type: 'source', label: 'Smartphones', value: 44.3, notes: ['(14%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'iot_lifestyle', col: 0, order: 1, type: 'source', label: 'IoT & Lifestyle', value: 24.6, notes: ['(20%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'internet_services', col: 0, order: 2, type: 'source', label: 'Internet Services', value: 9.9, notes: ['+6% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'other_segment', col: 0, order: 3, type: 'source', label: 'Other', value: 0.9, notes: ['+6% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'smartphones_aiot', col: 1, order: 0, type: 'source', label: ['Smartphones', 'x AIoT'], value: 79.7, notes: ['(14%) Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'smart_ev_ai_other', col: 1, order: 1, type: 'source', label: ['Smart EV,', 'AI and other'], value: 37.2, notes: ['+123% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 116.9, notes: ['+7% Y/Y'], color: ORANGE, labelColor: ORANGE_LABEL, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 24.4, notes: ['21% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 92.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 3.0, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 6.2, notes: ['5% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_after_operating', col: 6, order: 0, type: 'profit', label: 'Other', value: 0.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 6.5, notes: ['6% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 7, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 9.9, notes: ['8% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 3, type: 'cost', label: ['Research &', 'development'], value: 9.6, notes: ['8% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 1.6, notes: ['1% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'smartphones', target: 'smartphones_aiot', value: 44.3, width: 159, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'iot_lifestyle', target: 'smartphones_aiot', value: 24.6, width: 88, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'internet_services', target: 'smartphones_aiot', value: 9.9, width: 35, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'other_segment', target: 'smartphones_aiot', value: 0.9, width: 4, sourceOrder: 0, targetOrder: 3, linkTint: ORANGE_LINK },
      { source: 'smartphones_aiot', target: 'revenue', value: 79.7, width: 289, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'smart_ev_ai_other', target: 'revenue', value: 37.2, width: 134, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 24.4, width: 87, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 92.6, width: 336, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.2, width: 12, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 21.2, width: 76, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_operating_income', target: 'operating_profit', value: 3.0, width: 11, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 6.2, width: 23, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_after_operating', target: 'net_profit', value: 0.9, width: 3, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      // y0 is pinned to the source crop's lower red socket; auto stacking sits 3px too low.
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 2, sourceOrder: 1, targetOrder: 0, y0: 544, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 9.9, width: 35, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 9.6, width: 35, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.6, width: 6, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: '小米 · 2025 财年第四季度',
        meta: {
          title: '小米 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1660,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          smartphones: { label: '智能手机', notes: ['同比 (14%)'] },
          iot_lifestyle: { label: 'IoT 与生活消费产品', notes: ['同比 (20%)'] },
          internet_services: { label: '互联网服务', notes: ['同比 +6%'] },
          other_segment: { label: '其他', notes: ['同比 +6%'] },
          smartphones_aiot: { label: ['智能手机', '与智能物联'], notes: ['同比 (14%)'] },
          smart_ev_ai_other: { label: ['智能电动汽车、', 'AI 及其他'], notes: ['同比 +123%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 21%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_after_operating: { label: '其他' },
          net_profit: { label: '净利润', notes: ['净利率 6%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          sales_marketing: { label: ['销售与', '营销'], notes: ['占收入 8%', '同比 +2 个百分点'] },
          rnd: { label: ['研究与', '开发'], notes: ['占收入 8%', '同比 +2 个百分点'] },
          ga: { label: ['一般及', '行政'], notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: labelsZh,
        },
      },
    },
  });
})();

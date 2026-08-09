/* Tencent Q3 FY22 income statement — Source-bound fixed Sankey layout. */
(function () {
  const YELLOW = '#f8b62d';
  const YELLOW_LINK = '#f4d799';
  const SOCIAL_BLUE = '#0052d9';
  const SOCIAL_LINK = '#85aae6';
  const OLIVE = '#80a813';
  const OLIVE_LINK = '#bfd18e';
  const CORAL = '#f97a66';
  const CORAL_LINK = '#f4bcb3';
  const HUB = '#016db7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY = '#666666';
  const GRAY_LINK = '#b9b9b9';
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q3-fy22',
    name: 'Tencent · Q3 FY22',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2230,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: GRAY,
      noteColor: GRAY,
      palette: {
        source: { node: HUB, label: HUB },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: HUB, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 32, note: 21, lineGap: 6 },
    },
    annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="280" y="281" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">In RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark.png', x: 704, y: 274, width: 548, height: 124 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 34, y: 360, width: 231, height: 136 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 66, y: 576, width: 148, height: 147 },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 74, y: 787, width: 140, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 81, y: 1013, width: 136, height: 134 },
    ],
    layout: {
      scale: 2.5,
      nodes: {
        gaming: { x: 514, y: 395, width: 68, height: 109 },
        social_networks: { x: 514, y: 633, width: 68, height: 74 },
        advertising: { x: 514, y: 831, width: 68, height: 53 },
        finance_business_services: { x: 514, y: 1020, width: 68, height: 114 },
        others: { x: 514, y: 1250, width: 68, height: 5 },
        revenue: { x: 950, y: 631, width: 67, height: 357 },
        gross_profit: { x: 1399, y: 550, width: 68, height: 157 },
        cost_of_revenue: { x: 1402, y: 875, width: 67, height: 199 },
        other_gains: { x: 1755, y: 630, width: 67, height: 57 },
        operating_profit: { x: 1854, y: 466, width: 67, height: 130 },
        operating_expenses: { x: 1865, y: 872, width: 67, height: 84 },
        net_profit: { x: 2236, y: 395, width: 68, height: 97 },
        tax: { x: 2238, y: 680, width: 68, height: 16 },
        other: { x: 2238, y: 778, width: 68, height: 13 },
        rnd: { x: 2238, y: 970, width: 68, height: 37 },
        ga: { x: 2238, y: 1117, width: 68, height: 27 },
        sales_ga: { x: 2238, y: 1267, width: 68, height: 16 },
      },
      labels: {
        gaming: { blocks: [
          { x: 549, top: 303, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '(4%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 487, top: 425, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 548, top: 542, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '(2%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 625, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        advertising: { blocks: [
          { x: 548, top: 744, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '(4%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 834, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
        ] },
        finance_business_services: { blocks: [
          { x: 548, top: 932, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+3% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1012, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 548, top: 1160, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '(21%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1230, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 984, top: 500, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '(2%) Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1433, top: 415, anchor: 'middle', lineGap: 7, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '44% margin', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1436, top: 1094, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_gains: { blocks: [{ x: 1789, top: 706, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other gains', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1888, top: 337, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '37% margin', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1898, top: 968, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2423, top: 392, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '28% margin', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2380, top: 650, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        other: { blocks: [{ x: 2381, top: 750, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2424, top: 946, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        ga: { blocks: [{ x: 2424, top: 1094, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        sales_ga: { blocks: [{ x: 2425, top: 1249, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales, general', size: 25, weight: 800 }, { text: '& admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 42.9, valueText: '42.9B', notes: ['(4%) Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 29.8, valueText: '29.8B', notes: ['(2%) Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 21.5, valueText: '21.5B', notes: ['(4%) Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'finance_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 44.8, valueText: '44.8B', notes: ['+3% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.1, valueText: '1.1B', notes: ['(21%) Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 140.1, valueText: '140.1B', notes: ['(2%) Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 62.0, valueText: '62.0B', notes: ['44% margin'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 78.1, valueText: '(78.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_gains', col: 3, order: 0, type: 'profit', label: 'Other gains', value: 23.2, valueText: '23.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 51.6, valueText: '51.6B', notes: ['37% margin'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 33.6, valueText: '(33.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 38.8, valueText: '38.8B', notes: ['28% margin'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 7.1, valueText: '(7.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 5.6, valueText: '(5.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: ['Research &', 'development'], value: 15.1, valueText: '(15.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: ['General &', 'admin'], value: 11.4, valueText: '(11.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_ga', col: 4, order: 5, type: 'cost', label: ['Sales, general', '& admin'], value: 7.1, valueText: '(7.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 42.9, sourceWidth: 109, targetWidth: 109, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 29.8, sourceWidth: 74, targetWidth: 76, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 21.5, sourceWidth: 53, targetWidth: 55, targetOrder: 2 },
      { source: 'finance_business_services', target: 'revenue', value: 44.8, sourceWidth: 114, targetWidth: 114, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.1, sourceWidth: 5, targetWidth: 3, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 62.0, sourceWidth: 157, targetWidth: 157, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 78.1, sourceWidth: 200, targetWidth: 199, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 28.4, sourceWidth: 71, targetWidth: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 33.6, sourceWidth: 86, targetWidth: 84, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_gains', target: 'operating_profit', value: 23.2, sourceWidth: 57, targetWidth: 59, targetOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 38.8, sourceWidth: 98, targetWidth: 97, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 7.1, sourceWidth: 16, targetWidth: 16, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 5.6, sourceWidth: 16, targetWidth: 13, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 15.1, sourceWidth: 38, targetWidth: 37, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 11.4, sourceWidth: 28, targetWidth: 27, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sales_ga', value: 7.1, sourceWidth: 18, targetWidth: 16, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2022 财年第三季度',
        meta: { title: 'Tencent 2022 财年第三季度利润表', period: '2022 财年第三季度', periodNote: '截至 2022 年 9 月' },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <text x="280" y="281" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 (4%)'] },
          social_networks: { label: '社交网络', notes: ['同比 (2%)'] },
          advertising: { label: '广告', notes: ['同比 (4%)'] },
          finance_business_services: { label: '金融与企业服务', notes: ['同比 +3%'] },
          others: { label: '其他', notes: ['同比 (21%)'] },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 44%'] },
          cost_of_revenue: { label: '收入成本' },
          other_gains: { label: '其他收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 37%'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 28%'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          sales_ga: { label: '销售、一般及行政费用' },
        },
        layout: {
          labels: {
            finance_business_services: { blocks: [
              { x: 548, top: 932, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '同比 +3%', size: 21, weight: 400, color: GRAY }] },
              { x: 486, top: 1033, anchor: 'end', lineGap: 7, lines: [{ text: '金融与', size: 36, weight: 800 }, { text: '企业服务', size: 36, weight: 800 }] },
            ] },
            other_gains: { blocks: [{ x: 1789, top: 706, anchor: 'middle', lineGap: 6, lines: [{ text: '其他收益', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
          },
        },
      },
    },
  });
})();

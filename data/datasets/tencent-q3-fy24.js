/* Tencent Q3 FY24 income statement — source-bound fixed Sankey layout. */
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
    key: 'tencent-q3-fy24',
    name: 'Tencent · Q3 FY24',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 191,
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
        <text x="83" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark-q3-fy24', href: 'data/assets/raster-annotations/tencent/company-wordmark-q3-fy24.png', x: 712, y: 264, width: 525, height: 87 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 34, y: 360, width: 231, height: 136 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 66, y: 576, width: 148, height: 147 },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 74, y: 787, width: 140, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 81, y: 1013, width: 136, height: 134 },
    ],
    layout: {
      scale: 1.926,
      nodes: {
        gaming: { x: 512, y: 351, width: 66, height: 97 },
        social_networks: { x: 512, y: 610, width: 66, height: 57 },
        marketing_services: { x: 512, y: 834, width: 66, height: 56 },
        fintech_business_services: { x: 512, y: 1036, width: 66, height: 102 },
        others: { x: 511, y: 1277, width: 67, height: 1 },
        revenue: { x: 947, y: 633, width: 65, height: 322 },
        gross_profit: { x: 1381, y: 543, width: 67, height: 170 },
        cost_of_revenue: { x: 1384, y: 887, width: 66, height: 150 },
        other_operating_income: { x: 1705, y: 603, width: 66, height: 4 },
        operating_profit: { x: 1817, y: 454, width: 65, height: 101 },
        operating_expenses: { x: 1814, y: 727, width: 66, height: 72 },
        non_operating_other_income: { x: 2131, y: 481, width: 65, height: 16 },
        net_profit: { x: 2251, y: 344, width: 66, height: 102 },
        tax: { x: 2251, y: 645, width: 66, height: 15 },
        rnd: { x: 2251, y: 814, width: 66, height: 33 },
        ga: { x: 2251, y: 1014, width: 66, height: 19 },
        sm: { x: 2251, y: 1207, width: 66, height: 17 },
      },
      labels: {
        gaming: { blocks: [
          { x: 558, top: 254, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+13% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 495, top: 375, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 556, top: 513, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+4% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 487, top: 594, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        marketing_services: { blocks: [
          { x: 550, top: 745, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+17% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 481, top: 817, anchor: 'end', lineGap: 7, lines: [{ text: 'Marketing', size: 40, weight: 800 }, { text: 'Services', size: 40, weight: 800 }] },
        ] },
        fintech_business_services: { blocks: [
          { x: 549, top: 948, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+2% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1022, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 548, top: 1163, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '+17% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1254, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 981, top: 489, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+8% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1419, top: 376, anchor: 'middle', lineGap: 7, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '53% margin', size: 22, weight: 400, color: GRAY }, { text: '+4pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1412, top: 1059, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_operating_income: { blocks: [{ x: 1741, top: 630, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1856, top: 288, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '32% margin', size: 22, weight: 400, color: GRAY }, { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1848, top: 825, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        non_operating_other_income: { blocks: [{ x: 2166, top: 520, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2437, top: 362, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '32% margin', size: 22, weight: 400, color: GRAY }, { text: '+8pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2436, top: 620, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2443, top: 794, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '11% of revenue', size: 22, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        ga: { blocks: [{ x: 2440, top: 992, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '7% of revenue', size: 22, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        sm: { blocks: [{ x: 2440, top: 1187, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales &', size: 25, weight: 800 }, { text: 'marketing', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '6% of revenue', size: 22, weight: 400, color: GRAY }, { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 51.8, valueText: '51.8B', notes: ['+13% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 30.9, valueText: '30.9B', notes: ['+4% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'marketing_services', col: 0, order: 2, type: 'source', label: ['Marketing', 'Services'], value: 30.0, valueText: '30.0B', notes: ['+17% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'fintech_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 53.1, valueText: '53.1B', notes: ['+2% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.4, valueText: '1.4B', notes: ['+17% Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 167.2, valueText: '167.2B', notes: ['+8% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 88.8, valueText: '88.8B', notes: ['53% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 78.4, valueText: '(78.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 3.0, valueText: '3.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 53.3, valueText: '53.3B', notes: ['32% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 38.5, valueText: '(38.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'non_operating_other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 9.6, valueText: '9.6B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 54.0, valueText: '54.0B', notes: ['32% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 8.9, valueText: '(8.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'development'], value: 17.9, valueText: '(17.9B)', notes: ['11% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: ['General &', 'admin'], value: 11.2, valueText: '(11.2B)', notes: ['7% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: ['Sales &', 'marketing'], value: 9.4, valueText: '(9.4B)', notes: ['6% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 51.8, width: 97, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 30.9, width: 57, targetOrder: 1 },
      { source: 'marketing_services', target: 'revenue', value: 30.0, width: 56, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 53.1, width: 102, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.4, sourceWidth: 1, targetWidth: 10, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 88.8, width: 170, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 78.4, sourceWidth: 152, targetWidth: 150, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 50.3, width: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 38.5, width: 72, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_operating_income', target: 'operating_profit', value: 3.0, sourceWidth: 4, targetWidth: 3, targetOrder: 1, y0: 605, y1: 553.5, linkTint: GREEN_LINK, curve: { x0: 1771, x1: 1817, c1x: 1789, c2x: 1804, c1y: 605, c2y: 553.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 44.4, width: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 8.9, width: 15, sourceOrder: 1 },
      { source: 'non_operating_other_income', target: 'net_profit', value: 9.6, width: 16, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 17.9, sourceWidth: 34, targetWidth: 33, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 11.2, sourceWidth: 21, targetWidth: 19, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 9.4, sourceWidth: 17, targetWidth: 17, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2024 财年第三季度',
        meta: { title: 'Tencent 2024 财年第三季度利润表', period: '2024 财年第三季度', periodNote: '截至 2024 年 9 月' },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <text x="170" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +13%'] },
          social_networks: { label: '社交网络', notes: ['同比 +4%'] },
          marketing_services: { label: '营销服务', notes: ['同比 +17%'] },
          fintech_business_services: { label: ['金融与', '企业', '服务'], notes: ['同比 +2%'] },
          others: { label: '其他', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          non_operating_other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +8 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 7%', '同比 0 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: {
            fintech_business_services: { blocks: [
              { x: 549, top: 948, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '同比 +2%', size: 21, weight: 400, color: GRAY }] },
              { x: 486, top: 1022, anchor: 'end', lineGap: 7, lines: [{ text: '金融与', size: 36, weight: 800 }, { text: '企业', size: 36, weight: 800 }, { text: '服务', size: 36, weight: 800 }] },
            ] },
          },
        },
      },
    },
  });
})();

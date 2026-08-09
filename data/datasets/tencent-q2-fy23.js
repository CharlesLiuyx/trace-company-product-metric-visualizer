/* Tencent Q2 FY23 income statement — source-bound fixed Sankey layout. */
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
    key: 'tencent-q2-fy23',
    name: 'Tencent · Q2 FY23',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
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
        <text x="348" y="274" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark-zh.png', x: 715, y: 298, width: 529, height: 91 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 33, y: 458, width: 231, height: 136 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 65, y: 657, width: 148, height: 147 },
      { key: 'business-advertising-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 81, y: 870, width: 140, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 82, y: 1058, width: 136, height: 134 },
    ],
    layout: {
      scale: 1.9,
      nodes: {
        gaming: { x: 515, y: 484, width: 66, height: 83 },
        social_networks: { x: 515, y: 712, width: 66, height: 56 },
        advertising: { x: 515, y: 909, width: 66, height: 46 },
        fintech_business_services: { x: 515, y: 1082, width: 66, height: 91 },
        others: { x: 515, y: 1302, width: 66, height: 5 },
        revenue: { x: 948, y: 710, width: 64, height: 284 },
        gross_profit: { x: 1374, y: 644, width: 66, height: 134 },
        cost_of_revenue: { x: 1379, y: 943, width: 65, height: 149 },
        other_operating_income: { x: 1674, y: 688, width: 66, height: 5 },
        operating_profit: { x: 1799, y: 559, width: 65, height: 75 },
        operating_expenses: { x: 1802, y: 853, width: 64, height: 63 },
        net_profit: { x: 2242, y: 450, width: 66, height: 51 },
        tax: { x: 2242, y: 686, width: 66, height: 19 },
        other_expense: { x: 2242, y: 815, width: 66, height: 2 },
        rnd: { x: 2242, y: 976, width: 66, height: 28 },
        ga: { x: 2242, y: 1145, width: 66, height: 14 },
        sm: { x: 2242, y: 1285, width: 66, height: 16 },
      },
      labels: {
        gaming: { blocks: [
          { x: 562, top: 391, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+5% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 491, top: 499, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 561, top: 620, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+2% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 488, top: 696, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        advertising: { blocks: [
          { x: 563, top: 817, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+34% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 492, top: 905, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
        ] },
        fintech_business_services: { blocks: [
          { x: 542, top: 989, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+15% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 490, top: 1059, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 548, top: 1197, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '(7%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 497, top: 1278, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 984, top: 572, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+11% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1410, top: 476, anchor: 'middle', lineGap: 7, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '47% margin', size: 22, weight: 400, color: GRAY }, { text: '+4pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1415, top: 1119, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_operating_income: { blocks: [{ x: 1707, top: 708, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other gains', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1833, top: 399, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '27% margin', size: 22, weight: 400, color: GRAY }, { text: '+5pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1834, top: 936, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2429, top: 452, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '18% margin', size: 22, weight: 400, color: GRAY }, { text: '+4pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2422, top: 657, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        other_expense: { blocks: [{ x: 2428, top: 773, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2429, top: 943, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        ga: { blocks: [{ x: 2429, top: 1095, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        sm: { blocks: [{ x: 2428, top: 1244, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales &', size: 25, weight: 800 }, { text: 'marketing', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 44.5, valueText: '44.5B', notes: ['+5% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 29.7, valueText: '29.7B', notes: ['+2% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 25.0, valueText: '25.0B', notes: ['+34% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'fintech_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 48.6, valueText: '48.6B', notes: ['+15% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.4, valueText: '1.4B', notes: ['(7%) Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 149.2, valueText: '149.2B', notes: ['+11% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 70.8, valueText: '70.8B', notes: ['47% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 78.4, valueText: '(78.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 3, order: 0, type: 'profit', label: 'Other gains', value: 3.2, valueText: '3.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 40.3, valueText: '40.3B', notes: ['27% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 33.7, valueText: '(33.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 27.0, valueText: '27.0B', notes: ['18% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 11.1, valueText: '(11.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 2.1, valueText: '(2.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: ['Research &', 'development'], value: 16.0, valueText: '(16.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: ['General &', 'admin'], value: 9.4, valueText: '(9.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 5, type: 'cost', label: ['Sales &', 'marketing'], value: 8.3, valueText: '(8.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 44.5, width: 83, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 29.7, width: 56, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 25.0, width: 46, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 48.6, width: 91, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.4, sourceWidth: 5, targetWidth: 8, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 70.8, sourceWidth: 136, targetWidth: 134, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 78.4, sourceWidth: 148, targetWidth: 149, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 37.1, sourceWidth: 70, targetWidth: 70, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 33.7, sourceWidth: 64, targetWidth: 63, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_operating_income', target: 'operating_profit', value: 3.2, sourceWidth: 5, targetWidth: 5, targetOrder: 1, y0: 690.5, y1: 631.5, linkTint: GREEN_LINK, curve: { x0: 1740, x1: 1799, c1x: 1761, c2x: 1782, c1y: 690.5, c2y: 631.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 27.0, width: 51, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11.1, sourceWidth: 20, targetWidth: 19, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 2.1, sourceWidth: 4, targetWidth: 2, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 16.0, sourceWidth: 30, targetWidth: 28, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 9.4, sourceWidth: 18, targetWidth: 14, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 8.3, sourceWidth: 15, targetWidth: 16, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2023 财年第二季度',
        meta: { title: 'Tencent 2023 财年第二季度利润表', period: '2023 财年第二季度', periodNote: '截至 2023 年 6 月' },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <text x="348" y="274" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +5%'] },
          social_networks: { label: '社交网络', notes: ['同比 +2%'] },
          advertising: { label: '广告', notes: ['同比 +34%'] },
          fintech_business_services: { label: '金融与企业服务', notes: ['同比 +15%'] },
          others: { label: '其他', notes: ['同比 (7%)'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_income: { label: '其他收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          sm: { label: '销售与市场' },
        },
      },
    },
  });
})();

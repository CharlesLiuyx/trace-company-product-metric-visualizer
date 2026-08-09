/* Tencent Q2 FY25 income statement — source-bound fixed Sankey layout. */
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
    key: 'tencent-q2-fy25',
    name: 'Tencent · Q2 FY25',
    company: 'Tencent',
    meta: {
      company: 'Tencent', title: 'Tencent Q2 FY25 Income Statement', period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025', currency: '', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 191, titleSize: 127, titleWeight: 800, titleTextLength: 2230,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND,
      interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: GRAY, noteColor: GRAY,
      palette: {
        source: { node: HUB, label: HUB }, hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: HUB, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 32, note: 21, lineGap: 6 },
    },
    annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="83" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark.png', x: 704, y: 274, width: 548, height: 124 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 34, y: 360, width: 231, height: 136 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 66, y: 576, width: 148, height: 147 },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 74, y: 787, width: 140, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 81, y: 1013, width: 136, height: 134 },
    ],
    layout: {
      scale: 1.72,
      nodes: {
        gaming: { x: 514, y: 367, width: 68, height: 101 },
        social_networks: { x: 514, y: 619, width: 68, height: 54 },
        marketing_services: { x: 514, y: 826, width: 68, height: 59 },
        fintech_business_services: { x: 514, y: 1037, width: 68, height: 95 },
        others: { x: 514, y: 1283, width: 68, height: 1 },
        revenue: { x: 952, y: 630, width: 68, height: 318 },
        gross_profit: { x: 1390, y: 520, width: 68, height: 181 },
        cost_of_revenue: { x: 1390, y: 911, width: 68, height: 136 },
        operating_profit: { x: 1828, y: 440, width: 68, height: 103 },
        operating_expenses: { x: 1828, y: 705, width: 68, height: 76 },
        investments: { x: 2147, y: 482, width: 68, height: 13 },
        net_profit: { x: 2266, y: 357, width: 68, height: 90 },
        tax: { x: 2266, y: 619, width: 68, height: 18 },
        rnd: { x: 2266, y: 767, width: 68, height: 34 },
        ga: { x: 2266, y: 964, width: 68, height: 19 },
        sm: { x: 2266, y: 1154, width: 68, height: 14 },
        other_operating_expense: { x: 2266, y: 1347, width: 68, height: 4 },
      },
      labels: {
        gaming: { blocks: [
          { x: 558, top: 279, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+22% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 496, top: 393, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 548, top: 533, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+6% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 600, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        marketing_services: { blocks: [
          { x: 548, top: 736, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+20% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 809, anchor: 'end', lineGap: 7, lines: [{ text: 'Marketing', size: 40, weight: 800 }, { text: 'Services', size: 40, weight: 800 }] },
        ] },
        fintech_business_services: { blocks: [
          { x: 548, top: 949, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+10% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1018, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 548, top: 1201, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '(7%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1262, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 986, top: 489, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+15% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1424, top: 341, anchor: 'middle', lineGap: 15, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '57% margin', size: 22, weight: 400, color: GRAY }, { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1424, top: 1068, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1870, top: 263, anchor: 'middle', lineGap: 16, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '33% margin', size: 22, weight: 400, color: GRAY }, { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1862, top: 805, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        investments: { blocks: [{ x: 2170, top: 514, anchor: 'middle', lineGap: 6, lines: [{ text: 'Investments', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2437, top: 352, anchor: 'middle', lineGap: 15, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '30% margin', size: 22, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2435, top: 595, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2440, top: 729, anchor: 'middle', lineGap: 16, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '11% of revenue', size: 22, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        ga: { blocks: [{ x: 2440, top: 934, anchor: 'middle', lineGap: 16, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '6% of revenue', size: 22, weight: 400, color: GRAY }, { text: '(0pp) Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        sm: { blocks: [{ x: 2440, top: 1138, anchor: 'middle', lineGap: 16, lines: [{ text: 'Sales &', size: 25, weight: 800 }, { text: 'marketing', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '5% of revenue', size: 22, weight: 400, color: GRAY }, { text: '(1pp) Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        other_operating_expense: { blocks: [
          { x: 2358, top: 1337, anchor: 'start', lines: [{ text: 'Other', size: 25, weight: 800 }] },
          { x: 2452, top: 1337, anchor: 'start', lines: [{ text: '$value', size: 25, weight: 400 }] },
        ] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 59.2, valueText: '59.2B', notes: ['+22% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 32.2, valueText: '32.2B', notes: ['+6% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'marketing_services', col: 0, order: 2, type: 'source', label: ['Marketing', 'Services'], value: 35.8, valueText: '35.8B', notes: ['+20% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'fintech_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 55.5, valueText: '55.5B', notes: ['+10% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.8, valueText: '1.8B', notes: ['(7%) Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 184.5, valueText: '184.5B', notes: ['+15% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 105.0, valueText: '105.0B', notes: ['57% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 79.5, valueText: '(79.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 60.1, valueText: '60.1B', notes: ['33% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 44.9, valueText: '(44.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 4, order: 0, type: 'profit', label: 'Investments', value: 7.3, valueText: '7.3B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 56.0, valueText: '56.0B', notes: ['30% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 11.4, valueText: '(11.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'development'], value: 20.3, valueText: '(20.3B)', notes: ['11% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: ['General &', 'admin'], value: 11.6, valueText: '(11.6B)', notes: ['6% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: ['Sales &', 'marketing'], value: 9.4, valueText: '(9.4B)', notes: ['5% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_expense', col: 5, order: 5, type: 'cost', label: 'Other', value: 3.6, valueText: '(3.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 59.2, width: 101, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 32.2, width: 54, targetOrder: 1 },
      { source: 'marketing_services', target: 'revenue', value: 35.8, width: 59, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 55.5, width: 95, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.8, sourceWidth: 1, targetWidth: 9, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 105.0, sourceWidth: 181, targetWidth: 181, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 79.5, sourceWidth: 137, targetWidth: 136, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 60.1, sourceWidth: 104, targetWidth: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 44.9, sourceWidth: 77, targetWidth: 76, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 48.7, sourceWidth: 85, targetWidth: 78, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11.4, sourceWidth: 18, targetWidth: 18, sourceOrder: 1 },
      { source: 'investments', target: 'net_profit', value: 7.3, sourceWidth: 13, targetWidth: 12, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 20.3, sourceWidth: 34, targetWidth: 34, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 11.6, sourceWidth: 20, targetWidth: 19, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 9.4, sourceWidth: 16, targetWidth: 14, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 3.6, sourceWidth: 6, targetWidth: 4, sourceOrder: 3 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2025 财年第二季度',
        meta: { title: 'Tencent 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月' },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <text x="170" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +22%'] }, social_networks: { label: '社交网络', notes: ['同比 +6%'] },
          marketing_services: { label: '营销服务', notes: ['同比 +20%'] }, fintech_business_services: { label: '金融科技与企业服务', notes: ['同比 +10%'] },
          others: { label: '其他', notes: ['同比 (7%)'] }, revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +3 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +1 个百分点'] }, operating_expenses: { label: '运营费用' },
          investments: { label: '投资收益' }, net_profit: { label: '净利润', notes: ['利润率 30%', '同比 0 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 0 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 6%', '同比 0 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 5%', '同比 (1 个百分点)'] }, other_operating_expense: { label: '其他' },
        },
      },
    },
  });
})();

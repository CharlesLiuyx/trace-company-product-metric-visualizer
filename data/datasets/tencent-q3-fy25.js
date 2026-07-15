/* Tencent Q3 FY25 income statement — source-bound fixed Sankey layout. */
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
    key: 'tencent-q3-fy25',
    name: 'Tencent · Q3 FY25',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q3-fy25.png', width: 2667, height: 1500 },
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark.png', x: 704, y: 274, width: 548, height: 124 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 34, y: 360, width: 231, height: 136 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 66, y: 576, width: 148, height: 147 },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 74, y: 787, width: 140, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 81, y: 1013, width: 136, height: 134 },
    ],
    layout: {
      scale: 1.8,
      nodes: {
        gaming: { x: 514, y: 370, width: 68, height: 112 },
        social_networks: { x: 514, y: 634, width: 68, height: 56 },
        marketing_services: { x: 514, y: 842, width: 68, height: 62 },
        fintech_business_services: { x: 514, y: 1056, width: 68, height: 102 },
        others: { x: 514, y: 1310, width: 68, height: 2 },
        revenue: { x: 961, y: 595, width: 67, height: 345 },
        gross_profit: { x: 1406, y: 496, width: 69, height: 193 },
        cost_of_revenue: { x: 1406, y: 909, width: 69, height: 148 },
        // Center the user-confirmed Other micro-face over its label and match the 3px flow interface.
        other_operating_income: { x: 1725, y: 575, width: 70, height: 3 },
        operating_profit: { x: 1853, y: 411, width: 67, height: 113 },
        operating_expenses: { x: 1853, y: 734, width: 67, height: 80 },
        investments: { x: 2180, y: 480, width: 67, height: 18 },
        net_profit: { x: 2299, y: 345, width: 68, height: 115 },
        tax: { x: 2299, y: 640, width: 68, height: 16 },
        rnd: { x: 2299, y: 810, width: 68, height: 39 },
        sm: { x: 2299, y: 1043, width: 68, height: 19 },
        ga: { x: 2299, y: 1255, width: 68, height: 19 },
      },
      labels: {
        gaming: { blocks: [
          { x: 548, top: 281, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+23% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 410, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 548, top: 535, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+5% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 613, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        marketing_services: { blocks: [
          { x: 548, top: 742, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+21% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 822, anchor: 'end', lineGap: 7, lines: [{ text: 'Marketing', size: 40, weight: 800 }, { text: 'Services', size: 40, weight: 800 }] },
        ] },
        fintech_business_services: { blocks: [
          { x: 532, top: 953, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+10% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 470, top: 1021, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 548, top: 1214, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '+83% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1290, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 995, top: 449, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+15% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1441, top: 311, anchor: 'middle', lineGap: 7, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '56% margin', size: 22, weight: 400, color: GRAY }, { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1442, top: 1074, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_operating_income: { blocks: [{ x: 1760, top: 592, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1887, top: 231, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '33% margin', size: 22, weight: 400, color: GRAY }, { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1907, top: 838, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        investments: { blocks: [{ x: 2215, top: 520, anchor: 'middle', lineGap: 6, lines: [{ text: 'Investments', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2496, top: 344, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '34% margin', size: 22, weight: 400, color: GRAY }, { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2492, top: 598, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2534, top: 786, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '12% of revenue', size: 22, weight: 400, color: GRAY }, { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        sm: { blocks: [{ x: 2534, top: 999, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales &', size: 25, weight: 800 }, { text: 'marketing', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '6% of revenue', size: 22, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        ga: { blocks: [{ x: 2534, top: 1209, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }, { text: '6% of revenue', size: 22, weight: 400, color: GRAY }, { text: '(1pp) Y/Y', size: 22, weight: 400, color: GRAY }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 63.6, valueText: '63.6B', notes: ['+23% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 32.3, valueText: '32.3B', notes: ['+5% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'marketing_services', col: 0, order: 2, type: 'source', label: ['Marketing', 'Services'], value: 36.2, valueText: '36.2B', notes: ['+21% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'fintech_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 58.2, valueText: '58.2B', notes: ['+10% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 2.6, valueText: '2.6B', notes: ['+83% Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 192.9, valueText: '192.9B', notes: ['+15% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 108.8, valueText: '108.8B', notes: ['56% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 84.1, valueText: '(84.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.5, valueText: '0.5B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 63.6, valueText: '63.6B', notes: ['33% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 45.7, valueText: '(45.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 4, order: 0, type: 'profit', label: 'Investments', value: 11.1, valueText: '11.1B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 64.9, valueText: '64.9B', notes: ['34% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 9.8, valueText: '(9.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'development'], value: 22.8, valueText: '(22.8B)', notes: ['12% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 11.5, valueText: '(11.5B)', notes: ['6% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: ['General &', 'admin'], value: 11.4, valueText: '(11.4B)', notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 63.6, width: 112, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 32.3, width: 56, targetOrder: 1 },
      { source: 'marketing_services', target: 'revenue', value: 36.2, width: 62, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 58.2, width: 102, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 2.6, sourceWidth: 2, targetWidth: 13, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 108.8, width: 193, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 84.1, sourceWidth: 152, targetWidth: 148, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 63.1, width: 112, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 45.7, width: 80, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_operating_income', target: 'operating_profit', value: 0.5, sourceWidth: 3, targetWidth: 1, targetOrder: 1, y0: 576.5, y1: 523.5, linkTint: GREEN_LINK, curve: { x0: 1795, x1: 1853, c1x: 1818, c2x: 1835, c1y: 576.5, c2y: 523.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 54.1, width: 97, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 9.8, width: 16, sourceOrder: 1 },
      { source: 'investments', target: 'net_profit', value: 11.1, width: 18, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 22.8, width: 39, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 11.5, width: 19, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 11.4, sourceWidth: 22, targetWidth: 19, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2025 财年第三季度',
        meta: { title: 'Tencent 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月' },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <text x="170" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +23%'] },
          social_networks: { label: '社交网络', notes: ['同比 +5%'] },
          marketing_services: { label: '营销服务', notes: ['同比 +21%'] },
          fintech_business_services: { label: '金融科技与企业服务', notes: ['同比 +10%'] },
          others: { label: '其他', notes: ['同比 +83%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          investments: { label: '投资收益' },
          net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})();

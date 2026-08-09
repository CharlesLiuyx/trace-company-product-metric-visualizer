/* Tencent Q2 FY24 income statement — source-bound fixed Sankey layout. */
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
  const GRAY_LINK = '#b2b2b2';
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q2-fy24',
    name: 'Tencent · Q2 FY24',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q2-fy24.png', width: 2667, height: 1500 },
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
        <text x="348" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark-q3-fy24.png', x: 712, y: 303, width: 525, height: 87 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 34, y: 396, width: 231, height: 136, pairedNode: 'gaming', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 66, y: 625, width: 148, height: 147, pairedNode: 'social_networks', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 74, y: 842, width: 140, height: 134, pairedNode: 'advertising', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 81, y: 1063, width: 136, height: 134, pairedNode: 'finance_business_services', pairedTarget: 'label', pairedSide: 'left' },
    ],
    layout: {
      scale: 1.98,
      nodes: {
        gaming: { x: 516, y: 420, width: 67, height: 96 },
        social_networks: { x: 516, y: 670, width: 67, height: 58 },
        advertising: { x: 516, y: 881, width: 67, height: 56 },
        finance_business_services: { x: 516, y: 1083, width: 67, height: 98 },
        others: { x: 516, y: 1311, width: 67, height: 4 },
        revenue: { x: 948, y: 669, width: 66, height: 320 },
        gross_profit: { x: 1384, y: 592, width: 66, height: 170 },
        cost_of_revenue: { x: 1386, y: 939, width: 66, height: 148 },
        other_operating_income: { x: 1688, y: 657, width: 66, height: 3 },
        operating_profit: { x: 1814, y: 499, width: 65, height: 100 },
        operating_expenses: { x: 1814, y: 795, width: 65, height: 72 },
        other_non_operating_income: { x: 2125, y: 537, width: 65, height: 14 },
        net_profit: { x: 2251, y: 408, width: 67, height: 95 },
        tax: { x: 2251, y: 700, width: 67, height: 19 },
        rnd: { x: 2251, y: 886, width: 67, height: 33 },
        ga: { x: 2251, y: 1062, width: 67, height: 18 },
        sm: { x: 2251, y: 1251, width: 67, height: 16 },
      },
      labels: {
        gaming: { blocks: [
          { x: 559, top: 324, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+9% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 495, top: 440, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 555, top: 569, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+2% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 650, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        advertising: { blocks: [
          { x: 560, top: 789, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+19% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 496, top: 884, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
        ] },
        finance_business_services: { blocks: [
          { x: 550, top: 992, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+4% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1064, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 550, top: 1208, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '-46% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 496, top: 1289, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 981, top: 526, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+8% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1426, top: 421, anchor: 'middle', lineGap: 7, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '53% margin', size: 22, weight: 400, color: GRAY }, { text: '+6pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1419, top: 1104, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_operating_income: { blocks: [{ x: 1721, top: 677, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1858, top: 331, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '31% margin', size: 22, weight: 400, color: GRAY }, { text: '+7pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1847, top: 889, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_non_operating_income: { blocks: [{ x: 2157, top: 573, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2437, top: 409, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '30% margin', size: 22, weight: 400, color: GRAY }, { text: '+12pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2435, top: 672, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2443, top: 871, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        ga: { blocks: [{ x: 2440, top: 1035, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        sm: { blocks: [{ x: 2444, top: 1228, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales &', size: 25, weight: 800 }, { text: 'marketing', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 48.5, valueText: '48.5B', notes: ['+9% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 30.3, valueText: '30.3B', notes: ['+2% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 29.9, valueText: '29.9B', notes: ['+19% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'finance_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 50.4, valueText: '50.4B', notes: ['+4% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 2.0, valueText: '2.0B', notes: ['-46% Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 161.1, valueText: '161.1B', notes: ['+8% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 85.9, valueText: '85.9B', notes: ['53% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 75.2, valueText: '(75.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 1.5, valueText: '1.5B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 50.7, valueText: '50.7B', notes: ['31% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 36.7, valueText: '(36.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 7.8, valueText: '7.8B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 48.4, valueText: '48.4B', notes: ['30% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 10.1, valueText: '(10.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'development'], value: 17.3, valueText: '(17.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: ['General &', 'admin'], value: 10.2, valueText: '(10.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: ['Sales &', 'marketing'], value: 9.2, valueText: '(9.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 48.5, sourceWidth: 96, targetWidth: 96, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 30.3, sourceWidth: 58, targetWidth: 58, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 29.9, sourceWidth: 56, targetWidth: 56, targetOrder: 2 },
      { source: 'finance_business_services', target: 'revenue', value: 50.4, sourceWidth: 98, targetWidth: 98, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 2.0, sourceWidth: 4, targetWidth: 12, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 85.9, sourceWidth: 170, targetWidth: 170, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 75.2, sourceWidth: 150, targetWidth: 148, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 49.2, sourceWidth: 98, targetWidth: 97, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 36.7, sourceWidth: 72, targetWidth: 72, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_operating_income', target: 'operating_profit', value: 1.5, sourceWidth: 3, targetWidth: 3, targetOrder: 1, y0: 658.5, y1: 597.5, linkTint: GREEN_LINK, curve: { x0: 1754, x1: 1814, c1x: 1778, c2x: 1795, c1y: 658.5, c2y: 597.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 40.6, sourceWidth: 80, targetWidth: 80, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 10.1, sourceWidth: 20, targetWidth: 19, sourceOrder: 1 },
      { source: 'other_non_operating_income', target: 'net_profit', value: 7.8, sourceWidth: 14, targetWidth: 15, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 17.3, sourceWidth: 34, targetWidth: 33, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 10.2, sourceWidth: 20, targetWidth: 18, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 9.2, sourceWidth: 18, targetWidth: 16, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2024 财年第二季度',
        meta: { title: 'Tencent 2024 财年第二季度利润表', period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月' },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <text x="348" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +9%'] },
          social_networks: { label: '社交网络', notes: ['同比 +2%'] },
          advertising: { label: '广告', notes: ['同比 +19%'] },
          finance_business_services: { label: '金融与企业服务', notes: ['同比 +4%'] },
          others: { label: '其他', notes: ['同比 -46%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_non_operating_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +12 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          sm: { label: '销售与市场' },
        },
      },
    },
  });
})();

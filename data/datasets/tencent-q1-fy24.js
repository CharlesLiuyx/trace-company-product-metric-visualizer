/* Tencent Q1 FY24 income statement — source-bound fixed Sankey layout. */
(function () {
  const YELLOW = '#f8b62d';
  const YELLOW_LINK = '#f4d799';
  const SOCIAL_BLUE = '#0052d9';
  const SOCIAL_LINK = '#85aae6';
  const OLIVE = '#80a713';
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
    key: 'tencent-q1-fy24',
    name: 'Tencent · Q1 FY24',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
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
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="348" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark-zh', href: 'data/assets/raster-annotations/tencent/company-wordmark-zh.png', x: 711, y: 302, width: 529, height: 91 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 33, y: 445.5, width: 232, height: 136, pairedNode: 'gaming', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 66, y: 651, width: 148, height: 147, pairedNode: 'social_networks', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 81, y: 863.5, width: 141, height: 134, pairedNode: 'advertising', pairedTarget: 'label', pairedSide: 'left' },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 88, y: 1060, width: 137, height: 135, pairedNode: 'finance_business_services', pairedTarget: 'label', pairedSide: 'left' },
    ],
    layout: {
      scale: 1.85,
      nodes: {
        gaming: { x: 516, y: 462, width: 67, height: 90 },
        social_networks: { x: 516, y: 703, width: 67, height: 55 },
        advertising: { x: 516, y: 899, width: 67, height: 49 },
        finance_business_services: { x: 516, y: 1080, width: 67, height: 96 },
        others: { x: 516, y: 1313, width: 67, height: 3 },
        revenue: { x: 951, y: 668, width: 65, height: 300 },
        gross_profit: { x: 1382, y: 561, width: 66, height: 157 },
        cost_of_revenue: { x: 1386, y: 936, width: 66, height: 140 },
        other_operating_income: { x: 1686, y: 616, width: 66, height: 4 },
        operating_profit: { x: 1811, y: 459, width: 65, height: 97 },
        operating_expenses: { x: 1811, y: 791, width: 65, height: 59 },
        other_non_operating_income: { x: 2104, y: 506, width: 65, height: 7 },
        net_profit: { x: 2251, y: 372, width: 67, height: 79 },
        tax: { x: 2251, y: 684, width: 67, height: 26 },
        rnd: { x: 2251, y: 883, width: 67, height: 27 },
        ga: { x: 2251, y: 1071, width: 67, height: 15 },
        sm: { x: 2251, y: 1245, width: 67, height: 11 },
      },
      labels: {
        gaming: { blocks: [
          { x: 555, top: 365, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(0%) Y/Y', size: 28, weight: 400, color: GRAY }] },
          { x: 486, top: 485, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 540, top: 606, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(2%) Y/Y', size: 28, weight: 400, color: GRAY }] },
          { x: 486, top: 679, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        advertising: { blocks: [
          { x: 551, top: 802, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+26% Y/Y', size: 28, weight: 400, color: GRAY }] },
          { x: 486, top: 902, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
        ] },
        finance_business_services: { blocks: [
          { x: 550, top: 979, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+7% Y/Y', size: 28, weight: 400, color: GRAY }] },
          { x: 486, top: 1059, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 39, weight: 800 }, { text: 'Business', size: 39, weight: 800 }, { text: 'Services', size: 39, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 547, top: 1217, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 39, weight: 400, color: GRAY }, { text: '+110% Y/Y', size: 28, weight: 400, color: GRAY }] },
          { x: 503, top: 1286, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY, textLength: 153 }] },
        ] },
        revenue: { blocks: [{ x: 986, top: 519, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+6% Y/Y', size: 28, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1413, top: 382, anchor: 'middle', lineGap: 7, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '53% margin', size: 28, weight: 400, color: GRAY }, { text: '+7pp Y/Y', size: 28, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1415, top: 1101.5, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_operating_income: { blocks: [{ x: 1721, top: 631, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1847, top: 282, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '33% margin', size: 28, weight: 400, color: GRAY }, { text: '+8pp Y/Y', size: 28, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1842, top: 875.5, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_non_operating_income: { blocks: [{ x: 2140.5, top: 526, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2429, top: 341, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '27% margin', size: 28, weight: 400, color: GRAY }, { text: '+9pp Y/Y', size: 28, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2428, top: 663, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2438, top: 855, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 31, weight: 800 }, { text: 'development', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        ga: { blocks: [{ x: 2441, top: 1023, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 31, weight: 800 }, { text: 'admin', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        sm: { blocks: [{ x: 2444, top: 1193, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales &', size: 31, weight: 800 }, { text: 'marketing', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 48.1, valueText: '48.1B', notes: ['(0%) Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 30.5, valueText: '30.5B', notes: ['(2%) Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 26.5, valueText: '26.5B', notes: ['+26% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'finance_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 52.3, valueText: '52.3B', notes: ['+7% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 2.1, valueText: '2.1B', notes: ['+110% Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 159.5, valueText: '159.5B', notes: ['+6% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 83.9, valueText: '83.9B', notes: ['53% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 75.6, valueText: '(75.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 1.0, valueText: '1.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 52.6, valueText: '52.6B', notes: ['33% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 32.3, valueText: '(32.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 4.3, valueText: '4.3B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 42.7, valueText: '42.7B', notes: ['27% margin', '+9pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 14.2, valueText: '(14.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'development'], value: 15.7, valueText: '(15.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: ['General &', 'admin'], value: 9.1, valueText: '(9.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: ['Sales &', 'marketing'], value: 7.5, valueText: '(7.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 48.1, sourceWidth: 90, targetWidth: 90, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 30.5, sourceWidth: 55, targetWidth: 55, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 26.5, sourceWidth: 49, targetWidth: 49, targetOrder: 2 },
      { source: 'finance_business_services', target: 'revenue', value: 52.3, sourceWidth: 96, targetWidth: 96, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 2.1, sourceWidth: 3, targetWidth: 10, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 83.9, sourceWidth: 157, targetWidth: 157, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 75.6, sourceWidth: 143, targetWidth: 140, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 51.6, sourceWidth: 95, targetWidth: 95, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 32.3, sourceWidth: 62, targetWidth: 59, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_operating_income', target: 'operating_profit', value: 1.0, sourceWidth: 4, targetWidth: 2, targetOrder: 1, y0: 618, y1: 555, linkTint: GREEN_LINK, curve: { x0: 1752, x1: 1811, c1x: 1777, c2x: 1794, c1y: 618, c2y: 555 } },
      { source: 'operating_profit', target: 'net_profit', value: 38.4, sourceWidth: 71, targetWidth: 72, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 14.2, sourceWidth: 26, targetWidth: 26, sourceOrder: 1 },
      { source: 'other_non_operating_income', target: 'net_profit', value: 4.3, sourceWidth: 7, targetWidth: 7, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 15.7, sourceWidth: 29, targetWidth: 27, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 9.1, sourceWidth: 16, targetWidth: 15, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 7.5, sourceWidth: 14, targetWidth: 11, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2024 财年第一季度',
        meta: { title: 'Tencent 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2024 年 3 月' },
        annotationsSvg: `
          <g font-family="Noto Sans,Arial,sans-serif">
            <text x="348" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 0%'] },
          social_networks: { label: '社交网络', notes: ['同比 (2%)'] },
          advertising: { label: '广告', notes: ['同比 +26%'] },
          finance_business_services: { label: '金融与企业服务', notes: ['同比 +7%'] },
          others: { label: '其他', notes: ['同比 +110%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 +7 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_income: { label: '其他营业收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +8 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_non_operating_income: { label: '其他非经营收益' },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 +9 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          sm: { label: '销售与市场' },
        },
      },
    },
  });
})();

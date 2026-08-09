/* Tencent Q3 FY23 income statement — source-bound fixed Sankey layout. */
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
  const GRAY_LABEL = '#5e5e5e';
  const GRAY_LINK = '#b9b9b9';
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const CURRENCY = '#005392';

  const annotationsSvg = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="348" y="274" text-anchor="middle" font-size="40" font-weight="800" fill="${CURRENCY}">${zh ? '单位：人民币' : 'in RMB'}</text>
      <g class="sankey-interactive-annotation"
        data-node="other_gains"
        data-link-numerator="other_gains"
        data-link-denominator="operating_profit"
        data-link-anchor-x="1721"
        data-link-anchor-y="655">
        <rect x="1628" y="666" width="148" height="76" fill="#ffffff" fill-opacity="0"/>
        <text x="1702" y="699" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收益' : 'Other gains'}</text>
        <text x="1702" y="734" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">6.2B</text>
      </g>
    </g>`;

  const zhLabels = {
    gaming: { blocks: [
      { x: 565, top: 351, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32 }, { text: '同比 +7%', size: 21, color: GRAY }] },
      { x: 486, top: 466, anchor: 'end', lines: [{ text: '游戏', size: 40, weight: 800 }] },
    ] },
    social_networks: { blocks: [
      { x: 554, top: 605, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32 }, { text: '同比 0%', size: 21, color: GRAY }] },
      { x: 484, top: 699, anchor: 'end', lines: [{ text: '社交网络', size: 40, weight: 800 }] },
    ] },
    advertising: { blocks: [
      { x: 563, top: 819, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32 }, { text: '同比 +20%', size: 21, color: GRAY }] },
      { x: 486, top: 915, anchor: 'end', lines: [{ text: '广告', size: 40, weight: 800 }] },
    ] },
    fintech_business_services: { blocks: [
      { x: 550, top: 1019, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32 }, { text: '同比 +16%', size: 21, color: GRAY }] },
      { x: 486, top: 1119, anchor: 'end', lineGap: 7, lines: [{ text: '金融科技与', size: 34, weight: 800 }, { text: '企业服务', size: 34, weight: 800 }] },
    ] },
    others: { blocks: [
      { x: 554, top: 1272, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, color: GRAY_LABEL }, { text: '同比 +9%', size: 21, color: GRAY }] },
      { x: 475, top: 1339, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800, color: GRAY_LABEL }] },
    ] },
    revenue: { blocks: [{ x: 989, top: 555, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 33 }, { text: '同比 +10%', size: 22, color: GRAY }] }] },
    gross_profit: { blocks: [{ x: 1410, top: 426, anchor: 'middle', lineGap: 15, lines: [{ text: '毛利润', size: 38, weight: 800 }, { text: '$value', size: 33 }, { text: '利润率 49%', size: 22, color: GRAY }, { text: '同比 +5 个百分点', size: 22, color: GRAY }] }] },
    cost_of_revenue: { blocks: [{ x: 1407, top: 1118, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 32 }] }] },
    other_gains: { blocks: [] },
    operating_profit: { blocks: [{ x: 1842, top: 329, anchor: 'middle', lineGap: 17, lines: [{ text: '营业利润', size: 35, weight: 800 }, { text: '$value', size: 33 }, { text: '利润率 27%', size: 22, color: GRAY }, { text: '同比 +5 个百分点', size: 22, color: GRAY }] }] },
    operating_expenses: { blocks: [{ x: 1851, top: 905, anchor: 'middle', lineGap: 7, lines: [{ text: '运营费用', size: 36, weight: 800 }, { text: '$value', size: 32 }] }] },
    net_profit: { blocks: [{ x: 2429, top: 396, anchor: 'middle', lineGap: 15, lines: [{ text: '净利润', size: 38, weight: 800 }, { text: '$value', size: 33 }, { text: '利润率 24%', size: 22, color: GRAY }, { text: '同比 (4 个百分点)', size: 22, color: GRAY }] }] },
    tax: { blocks: [{ x: 2422, top: 621, anchor: 'middle', lineGap: 7, lines: [{ text: '税费', size: 30, weight: 800 }, { text: '$value', size: 30 }] }] },
    other: { blocks: [{ x: 2428, top: 736, anchor: 'middle', lineGap: 7, lines: [{ text: '其他', size: 30, weight: 800 }, { text: '$value', size: 30 }] }] },
    rnd: { blocks: [{ x: 2435, top: 881, anchor: 'middle', lineGap: 7, lines: [{ text: '研究与', size: 29, weight: 800 }, { text: '开发', size: 29, weight: 800 }, { text: '$value', size: 29 }] }] },
    ga: { blocks: [{ x: 2438, top: 1038, anchor: 'middle', lineGap: 7, lines: [{ text: '一般及', size: 29, weight: 800 }, { text: '行政', size: 29, weight: 800 }, { text: '$value', size: 29 }] }] },
    sm: { blocks: [{ x: 2444, top: 1201, anchor: 'middle', lineGap: 7, lines: [{ text: '销售与', size: 29, weight: 800 }, { text: '市场', size: 29, weight: 800 }, { text: '$value', size: 29 }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q3-fy23',
    name: 'Tencent · Q3 FY23',
    company: 'Tencent',
    meta: {
      company: 'Tencent', title: 'Tencent Q3 FY23 Income Statement', period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023', currency: '', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 191, titleSize: 127, titleWeight: 800, titleTextLength: 2225,
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
    annotationsSvg: annotationsSvg(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark-q3-fy24.png', x: 712, y: 303, width: 525, height: 87 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 33, y: 419, width: 232, height: 137 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 64, y: 650, width: 149, height: 148 },
      { key: 'business-advertising-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 81, y: 881, width: 141, height: 134 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 88, y: 1102, width: 138, height: 136 },
    ],
    layout: {
      scale: 2.02,
      nodes: {
        gaming: { x: 518, y: 441, width: 66, height: 92 },
        social_networks: { x: 518, y: 695, width: 66, height: 59 },
        advertising: { x: 518, y: 912, width: 66, height: 49 },
        fintech_business_services: { x: 518, y: 1112, width: 66, height: 104 },
        others: { x: 518, y: 1367, width: 66, height: 1 },
        revenue: { x: 952, y: 702, width: 65, height: 313 },
        gross_profit: { x: 1377, y: 610, width: 66, height: 154 },
        cost_of_revenue: { x: 1379, y: 944, width: 66, height: 158 },
        other_gains: { x: 1688, y: 650, width: 66, height: 10 },
        operating_profit: { x: 1808, y: 513, width: 65, height: 96 },
        operating_expenses: { x: 1815, y: 803, width: 65, height: 68 },
        net_profit: { x: 2250, y: 425, width: 66, height: 73 },
        tax: { x: 2250, y: 657, width: 66, height: 21 },
        other: { x: 2250, y: 761, width: 66, height: 2 },
        rnd: { x: 2250, y: 920, width: 66, height: 31 },
        ga: { x: 2250, y: 1086, width: 66, height: 19 },
        sm: { x: 2250, y: 1248, width: 66, height: 15 },
      },
      labels: {
        gaming: { blocks: [
          { x: 565, top: 351, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+7% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 466, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800, textLength: 149 }] },
        ] },
        social_networks: { blocks: [
          { x: 554, top: 605, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, textLength: 99 }, { text: '+0% Y/Y', size: 21, weight: 400, color: GRAY, textLength: 102 }] },
          { x: 484, top: 680, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800, textLength: 188 }, { text: 'Networks', size: 40, weight: 800, textLength: 188 }] },
        ] },
        advertising: { blocks: [
          { x: 563, top: 819, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+20% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 916, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
        ] },
        fintech_business_services: { blocks: [
          { x: 550, top: 1019, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+16% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1101, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 554, top: 1272, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY_LABEL, textLength: 75 }, { text: '+9% Y/Y', size: 21, weight: 400, color: GRAY, textLength: 103 }] },
          { x: 475, top: 1339, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY_LABEL, textLength: 130 }] },
        ] },
        revenue: { blocks: [{ x: 989, top: 555, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+10% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1410, top: 426, anchor: 'middle', lineGap: 15, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '49% margin', size: 22, weight: 400, color: GRAY }, { text: '+5pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1407, top: 1118, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_gains: { blocks: [] },
        operating_profit: { blocks: [{ x: 1842, top: 329, anchor: 'middle', lineGap: 17, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '27% margin', size: 22, weight: 400, color: GRAY }, { text: '+5pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1851, top: 891, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2429, top: 396, anchor: 'middle', lineGap: 15, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '24% margin', size: 22, weight: 400, color: GRAY }, { text: '(4pp) Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2422, top: 621, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        other: { blocks: [{ x: 2428, top: 736, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2435, top: 881, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 29, weight: 800 }, { text: 'development', size: 29, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
        ga: { blocks: [{ x: 2438, top: 1038, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 29, weight: 800 }, { text: 'admin', size: 29, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
        sm: { blocks: [{ x: 2444, top: 1201, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales &', size: 29, weight: 800 }, { text: 'marketing', size: 29, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 46.0, valueText: '46.0B', notes: ['+7% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 29.7, valueText: '29.7B', notes: ['+0% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 25.7, valueText: '25.7B', notes: ['+20% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'fintech_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 52.0, valueText: '52.0B', notes: ['+16% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.2, valueText: '1.2B', notes: ['+9% Y/Y'], color: GRAY_LABEL, labelColor: GRAY_LABEL, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 154.6, valueText: '154.6B', notes: ['+10% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 76.5, valueText: '76.5B', notes: ['49% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 78.1, valueText: '(78.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_gains', col: 3, order: 0, type: 'profit', label: 'Other gains', value: 6.2, valueText: '6.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 48.5, valueText: '48.5B', notes: ['27% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 34.2, valueText: '(34.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 36.8, valueText: '36.8B', notes: ['24% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 11.0, valueText: '(11.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.7, valueText: '(0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: ['Research &', 'development'], value: 16.5, valueText: '(16.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: ['General &', 'admin'], value: 9.8, valueText: '(9.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 5, type: 'cost', label: ['Sales &', 'marketing'], value: 7.9, valueText: '(7.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 46.0, sourceWidth: 92, targetWidth: 93, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 29.7, sourceWidth: 59, targetWidth: 60, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 25.7, sourceWidth: 49, targetWidth: 52, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 52.0, sourceWidth: 104, targetWidth: 105, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.2, sourceWidth: 1, targetWidth: 3, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 76.5, sourceWidth: 155, targetWidth: 154, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 78.1, sourceWidth: 158, targetWidth: 158, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 42.3, sourceWidth: 86, targetWidth: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 34.2, sourceWidth: 68, targetWidth: 68, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_gains', target: 'operating_profit', value: 6.2, sourceWidth: 10, targetWidth: 10, targetOrder: 1, y0: 655, y1: 604, linkTint: GREEN_LINK, curve: { x0: 1754, x1: 1808, c1x: 1776, c2x: 1791, c1y: 655, c2y: 604 } },
      { source: 'operating_profit', target: 'net_profit', value: 36.8, sourceWidth: 73, targetWidth: 73, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11.0, sourceWidth: 21, targetWidth: 21, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.7, sourceWidth: 2, targetWidth: 2, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 16.5, sourceWidth: 33, targetWidth: 31, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 9.8, sourceWidth: 20, targetWidth: 19, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 7.9, sourceWidth: 15, targetWidth: 15, sourceOrder: 2 },
    ],
    i18n: { zh: {
      name: 'Tencent · 2023 财年第三季度',
      meta: { title: 'Tencent 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月' },
      annotationsSvg: annotationsSvg(true),
      layout: { labels: zhLabels },
      nodes: {
        gaming: { label: '游戏', notes: ['同比 +7%'] }, social_networks: { label: '社交网络', notes: ['同比 0%'] },
        advertising: { label: '广告', notes: ['同比 +20%'] }, fintech_business_services: { label: '金融科技与企业服务', notes: ['同比 +16%'] },
        others: { label: '其他', notes: ['同比 +9%'] }, revenue: { label: '收入', notes: ['同比 +10%'] },
        gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 +5 个百分点'] }, cost_of_revenue: { label: '收入成本' },
        other_gains: { label: '其他收益' }, operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +5 个百分点'] },
        operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 24%', '同比 (4 个百分点)'] },
        tax: { label: '税费' }, other: { label: '其他' }, rnd: { label: '研发' }, ga: { label: '管理费用' }, sm: { label: '销售与市场' },
      },
    } },
  });
})();

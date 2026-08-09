/* Tencent Q1 FY23 income statement — source-bound fixed Sankey layout. */
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
  const GRAY_LINK = '#bababa';
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q1-fy23',
    name: 'Tencent · Q1 FY23',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q1-fy23.png', width: 2667, height: 1500 },
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
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="349" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">In RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark.png', x: 716, y: 303, width: 527, height: 81 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 33, y: 441, width: 232, height: 137 },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 64, y: 636, width: 148, height: 148 },
      { key: 'business-marketing-services-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 81, y: 850, width: 141, height: 129 },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 82, y: 1055, width: 136, height: 135 },
    ],
    layout: {
      scale: 1.8,
      nodes: {
        gaming: { x: 515, y: 471, width: 66, height: 86 },
        social_networks: { x: 515, y: 695, width: 66, height: 53 },
        advertising: { x: 515, y: 891, width: 66, height: 36 },
        finance_business_services: { x: 515, y: 1075, width: 66, height: 85 },
        others: { x: 515, y: 1318, width: 66, height: 1 },
        revenue: { x: 947, y: 710, width: 64, height: 268 },
        gross_profit: { x: 1377, y: 621, width: 65, height: 121 },
        cost_of_revenue: { x: 1379, y: 902, width: 66, height: 145 },
        other_gains: { x: 1693, y: 652, width: 65, height: 5 },
        operating_profit: { x: 1808, y: 528, width: 65, height: 70 },
        operating_expenses: { x: 1815, y: 809, width: 64, height: 55 },
        net_profit: { x: 2238, y: 411, width: 66, height: 47 },
        tax: { x: 2238, y: 712, width: 66, height: 20 },
        other: { x: 2238, y: 838, width: 66, height: 2 },
        rnd: { x: 2236, y: 977, width: 65, height: 25 },
        ga: { x: 2238, y: 1139, width: 66, height: 15 },
        sga: { x: 2238, y: 1303, width: 66, height: 10 },
      },
      labels: {
        gaming: { blocks: [
          { x: 553, top: 380, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400, textLength: 106 }, { text: '+11% Y/Y', size: 21, weight: 400, color: GRAY, textLength: 114 }] },
          { x: 484, top: 492, anchor: 'end', lines: [{ text: 'Gaming', size: 32, weight: 800, textLength: 146 }] },
        ] },
        social_networks: { blocks: [
          { x: 548, top: 609, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, textLength: 96 }, { text: '+7% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 481, top: 681, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 32, weight: 800, textLength: 109 }, { text: 'Networks', size: 32, weight: 800, textLength: 185 }] },
        ] },
        advertising: { blocks: [
          { x: 548, top: 801, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+17% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 484, top: 893, anchor: 'end', lines: [{ text: 'Advertising', size: 32, weight: 800, textLength: 221 }] },
        ] },
        finance_business_services: { blocks: [
          { x: 548, top: 986, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+14% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1055, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 548, top: 1228, anchor: 'middle', lineGap: 6, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '(50%) Y/Y', size: 21, weight: 400, color: GRAY, textLength: 130 }] },
          { x: 484, top: 1295, anchor: 'end', lines: [{ text: 'Others', size: 32, weight: 800, color: GRAY, textLength: 136 }] },
        ] },
        revenue: { blocks: [{ x: 980, top: 570, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+11% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1410, top: 438, anchor: 'middle', lineGap: 15, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '45% margin', size: 22, weight: 400, color: GRAY }, { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1412, top: 1073, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_gains: { blocks: [{ x: 1726, top: 676, anchor: 'middle', lineGap: 6, lines: [{ text: 'Other gains', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1841, top: 346, anchor: 'middle', lineGap: 17, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '27% margin', size: 22, weight: 400, color: GRAY }, { text: '(1pp) Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1847, top: 889, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2423, top: 380, anchor: 'middle', lineGap: 15, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '18% margin', size: 22, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2422, top: 684, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        other: { blocks: [{ x: 2428, top: 810, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2424, top: 932, anchor: 'middle', lineGap: 13, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        ga: { blocks: [{ x: 2424, top: 1094, anchor: 'middle', lineGap: 13, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        sga: { blocks: [{ x: 2422, top: 1254, anchor: 'middle', lineGap: 13, lines: [{ text: 'Sales, general', size: 25, weight: 800 }, { text: '& admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 48.3, valueText: '48.3B', notes: ['+11% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 31.0, valueText: '31.0B', notes: ['+7% Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 21.0, valueText: '21.0B', notes: ['+17% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'finance_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 48.7, valueText: '48.7B', notes: ['+14% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.0, valueText: '1.0B', notes: ['(50%) Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 150.0, valueText: '150.0B', notes: ['+11% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 68.2, valueText: '68.2B', notes: ['45% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 81.8, valueText: '(81.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_gains', col: 3, order: 0, type: 'profit', label: 'Other gains', value: 3.8, valueText: '3.8B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 40.4, valueText: '40.4B', notes: ['27% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 31.6, valueText: '(31.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 26.4, valueText: '26.4B', notes: ['18% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 11.5, valueText: '(11.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 2.5, valueText: '(2.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: ['Research &', 'development'], value: 15.2, valueText: '(15.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: ['General &', 'admin'], value: 9.4, valueText: '(9.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 5, type: 'cost', label: ['Sales, general', '& admin'], value: 7.0, valueText: '(7.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 48.3, sourceWidth: 86, targetWidth: 86, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 31.0, sourceWidth: 53, targetWidth: 55, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 21.0, sourceWidth: 36, targetWidth: 37, targetOrder: 2 },
      { source: 'finance_business_services', target: 'revenue', value: 48.7, sourceWidth: 85, targetWidth: 85, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.0, sourceWidth: 1, targetWidth: 5, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 68.2, sourceWidth: 122, targetWidth: 121, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 81.8, sourceWidth: 146, targetWidth: 145, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 36.6, sourceWidth: 65, targetWidth: 65, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 31.6, sourceWidth: 56, targetWidth: 55, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_gains', target: 'operating_profit', value: 3.8, sourceWidth: 5, targetWidth: 5, targetOrder: 1, y0: 654.5, y1: 595.5, linkTint: GREEN_LINK, curve: { x0: 1758, x1: 1808, c1x: 1778, c2x: 1794, c1y: 654.5, c2y: 595.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 26.4, sourceWidth: 46, targetWidth: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11.5, sourceWidth: 20, targetWidth: 20, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 2.5, sourceWidth: 4, targetWidth: 2, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 15.2, sourceWidth: 27, targetWidth: 25, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 9.4, sourceWidth: 16, targetWidth: 15, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 7.0, sourceWidth: 12, targetWidth: 10, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2023 财年第一季度',
        meta: { title: 'Tencent 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2023 年 3 月' },
        annotationsSvg: `
          <g font-family="Noto Sans,Arial,sans-serif">
            <text x="349" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +11%'] },
          social_networks: { label: '社交网络', notes: ['同比 +7%'] },
          advertising: { label: '广告', notes: ['同比 +17%'] },
          finance_business_services: { label: '金融科技与企业服务', notes: ['同比 +14%'] },
          others: { label: '其他', notes: ['同比 (50%)'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_gains: { label: '其他收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 0 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          sga: { label: '销售、一般及管理费用' },
        },
      },
    },
  });
})();

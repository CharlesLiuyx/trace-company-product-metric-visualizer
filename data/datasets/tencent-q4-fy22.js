/* Tencent Q4 FY22 income statement — source-bound fixed Sankey layout. */
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
  const GRAY_LINK = '#b3b3b3';
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q4-fy22',
    name: 'Tencent · Q4 FY22',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 191,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2227,
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
      <g>
        <text x="349" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">In RMB</text>
      </g>`,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/tencent/company-wordmark-q3-fy24.png', x: 673, y: 300, width: 525, height: 87 },
      { key: 'business-gaming-cluster', href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png', x: 33, y: 424, width: 232, height: 136, pairedNode: 'gaming' },
      { key: 'business-social-networks-cluster', href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png', x: 64, y: 637, width: 148, height: 148, pairedNode: 'social_networks' },
      { key: 'business-advertising-cluster', href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png', x: 81, y: 850, width: 141, height: 135, pairedNode: 'advertising' },
      { key: 'business-fintech-business-services-cluster', href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png', x: 82, y: 1080, width: 136, height: 135, pairedNode: 'finance_business_services' },
    ],
    layout: {
      scale: 2,
      nodes: {
        gaming: { x: 515, y: 446, width: 66, height: 84 },
        social_networks: { x: 515, y: 687, width: 66, height: 56 },
        advertising: { x: 515, y: 890, width: 66, height: 48 },
        finance_business_services: { x: 515, y: 1102, width: 66, height: 95 },
        others: { x: 515, y: 1348, width: 66, height: 3 },
        revenue: { x: 903, y: 743, width: 64, height: 297 },
        gross_profit: { x: 1301, y: 659, width: 65, height: 125 },
        cost_of_revenue: { x: 1303, y: 949, width: 66, height: 168 },
        other_gains: { x: 1524, y: 366, width: 66, height: 179 },
        operating_profit: { x: 1838, y: 427, width: 64, height: 239 },
        operating_expenses: { x: 1838, y: 789, width: 64, height: 67 },
        net_profit: { x: 2238, y: 351, width: 66, height: 218 },
        tax: { x: 2238, y: 726, width: 66, height: 8 },
        other_expenses: { x: 2238, y: 844, width: 66, height: 9 },
        rnd: { x: 2238, y: 982, width: 66, height: 30 },
        ga: { x: 2238, y: 1137, width: 66, height: 21 },
        sales_general_admin: { x: 2238, y: 1293, width: 66, height: 11 },
      },
      labels: {
        gaming: { blocks: [
          { x: 552, top: 348, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '(2%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 499, top: 463, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
        ] },
        social_networks: { blocks: [
          { x: 552, top: 588, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '(2%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 494, top: 667, anchor: 'end', lineGap: 7, lines: [{ text: 'Social', size: 40, weight: 800 }, { text: 'Networks', size: 40, weight: 800 }] },
        ] },
        advertising: { blocks: [
          { x: 552, top: 791, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '+15% Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 500, top: 886, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
        ] },
        finance_business_services: { blocks: [
          { x: 570, top: 1010, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '(1%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 493, top: 1084, anchor: 'end', lineGap: 7, lines: [{ text: 'Finance &', size: 36, weight: 800 }, { text: 'Business', size: 36, weight: 800 }, { text: 'Services', size: 36, weight: 800 }] },
        ] },
        others: { blocks: [
          { x: 548, top: 1251, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400, color: GRAY }, { text: '(6%) Y/Y', size: 21, weight: 400, color: GRAY }] },
          { x: 486, top: 1321, anchor: 'end', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
        ] },
        revenue: { blocks: [{ x: 935, top: 608, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '+1% Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        gross_profit: { blocks: [{ x: 1334, top: 486, anchor: 'middle', lineGap: 7, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '43% margin', size: 22, weight: 400, color: GRAY }, { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        cost_of_revenue: { blocks: [{ x: 1336, top: 1138, anchor: 'middle', lineGap: 7, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        other_gains: { blocks: [{ x: 1557, top: 279, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other gains', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1870, top: 256, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '81% margin', size: 22, weight: 400, color: GRAY }, { text: '+4pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        operating_expenses: { blocks: [{ x: 1870, top: 873, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2423, top: 388, anchor: 'middle', lineGap: 7, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 33, weight: 400 }, { text: '74% margin', size: 22, weight: 400, color: GRAY }, { text: '+7pp Y/Y', size: 22, weight: 400, color: GRAY }] }] },
        tax: { blocks: [{ x: 2422, top: 696, anchor: 'middle', lineGap: 7, lines: [{ text: 'Tax', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        other_expenses: { blocks: [{ x: 2422, top: 823, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other', size: 26, weight: 800 }, { text: '$value', size: 26, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2424, top: 946, anchor: 'middle', lineGap: 7, lines: [{ text: 'Research &', size: 25, weight: 800 }, { text: 'development', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        ga: { blocks: [{ x: 2424, top: 1095, anchor: 'middle', lineGap: 7, lines: [{ text: 'General &', size: 25, weight: 800 }, { text: 'admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
        sales_general_admin: { blocks: [{ x: 2422, top: 1241, anchor: 'middle', lineGap: 7, lines: [{ text: 'Sales, general', size: 25, weight: 800 }, { text: '& admin', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 41.8, valueText: '41.8B', notes: ['(2%) Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 28.6, valueText: '28.6B', notes: ['(2%) Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 24.7, valueText: '24.7B', notes: ['+15% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'finance_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 47.2, valueText: '47.2B', notes: ['(1%) Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 2.7, valueText: '2.7B', notes: ['(6%) Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 145.0, valueText: '145.0B', notes: ['+1% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 61.9, valueText: '61.9B', notes: ['43% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 83.1, valueText: '(83.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_gains', col: 3, order: 0, type: 'profit', label: 'Other gains', value: 88.3, valueText: '88.3B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 116.8, valueText: '116.8B', notes: ['81% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 33.4, valueText: '(33.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 106.9, valueText: '106.9B', notes: ['74% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 4.6, valueText: '(4.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 2, type: 'cost', label: 'Other', value: 5.3, valueText: '(5.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: ['Research &', 'development'], value: 15.9, valueText: '(15.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: ['General &', 'admin'], value: 11.4, valueText: '(11.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_general_admin', col: 4, order: 5, type: 'cost', label: ['Sales, general', '& admin'], value: 6.1, valueText: '(6.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gaming', target: 'revenue', value: 41.8, sourceWidth: 84, targetWidth: 86, y0: 488, y1: 786, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 28.6, sourceWidth: 56, targetWidth: 59, y0: 715, y1: 858.5, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 24.7, sourceWidth: 48, targetWidth: 51, y0: 914, y1: 913.5, targetOrder: 2 },
      { source: 'finance_business_services', target: 'revenue', value: 47.2, sourceWidth: 95, targetWidth: 96, y0: 1149.5, y1: 987, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 2.7, sourceWidth: 3, targetWidth: 5, y0: 1349.5, y1: 1037.5, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 61.9, width: 125, y0: 805.5, y1: 721.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 83.1, sourceWidth: 172, targetWidth: 168, y0: 954, y1: 1033, sourceOrder: 1 },
      { source: 'other_gains', target: 'operating_profit', value: 88.3, width: 179, y0: 455.5, y1: 516.5, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 28.5, sourceWidth: 57, targetWidth: 60, y0: 687.5, y1: 636, sourceOrder: 0, targetOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 33.4, sourceWidth: 68, targetWidth: 67, y0: 750, y1: 822.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 106.9, sourceWidth: 219, targetWidth: 218, y0: 536.5, y1: 460, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.6, sourceWidth: 9, targetWidth: 8, y0: 650.5, y1: 730, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expenses', value: 5.3, sourceWidth: 11, targetWidth: 9, y0: 660.5, y1: 848.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 15.9, sourceWidth: 32, targetWidth: 30, y0: 805, y1: 997, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 11.4, sourceWidth: 23, targetWidth: 21, y0: 832.5, y1: 1147.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sales_general_admin', value: 6.1, sourceWidth: 12, targetWidth: 11, y0: 850, y1: 1298.5, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tencent · 2022 财年第四季度',
        meta: { title: 'Tencent 2022 财年第四季度利润表', period: '2022 财年第四季度', periodNote: '截至 2022 年 12 月' },
        annotationsSvg: `
          <g>
            <text x="349" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
          </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 (2%)'] },
          social_networks: { label: '社交网络', notes: ['同比 (2%)'] },
          advertising: { label: '广告', notes: ['同比 +15%'] },
          finance_business_services: { label: '金融与企业服务', notes: ['同比 (1%)'] },
          others: { label: '其他', notes: ['同比 (6%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_gains: { label: '其他收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 81%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 74%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          other_expenses: { label: '其他' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          sales_general_admin: { label: '销售、综合与管理费用' },
        },
        layout: {
          labels: {
            finance_business_services: { blocks: [
              { x: 570, top: 1010, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 32, weight: 400 }, { text: '同比 (1%)', size: 21, weight: 400, color: GRAY }] },
              { x: 493, top: 1102, anchor: 'end', lineGap: 7, lines: [{ text: '金融与', size: 36, weight: 800 }, { text: '企业服务', size: 36, weight: 800 }] },
            ] },
            other_gains: { blocks: [{ x: 1557, top: 279, anchor: 'middle', lineGap: 7, lines: [{ text: '其他收益', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
            ga: { blocks: [{ x: 2424, top: 1095, anchor: 'middle', lineGap: 7, lines: [{ text: '管理', size: 25, weight: 800 }, { text: '费用', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
            sales_general_admin: { blocks: [{ x: 2422, top: 1241, anchor: 'middle', lineGap: 7, lines: [{ text: '销售、综合', size: 25, weight: 800 }, { text: '与管理', size: 25, weight: 800 }, { text: '$value', size: 25, weight: 400 }] }] },
          },
        },
      },
    },
  });
})();

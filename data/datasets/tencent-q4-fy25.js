/* ====================================================================
 *  Tencent - Q4 FY25 income statement (RMB B)
 *  Reconstructed from input/processed/tencent-q4-fy25.png as a fixed
 *  d3-sankey layout with reused crop-backed business annotations.
 * ==================================================================== */
(function () {
  const YELLOW = '#f8b62d';
  const YELLOW_LINK = '#f4d799';
  const SOCIAL_BLUE = '#0056cc';
  const SOCIAL_LINK = '#85aae6';
  const OLIVE = '#76a907';
  const OLIVE_LINK = '#bfd18e';
  const CORAL = '#f97a66';
  const CORAL_LINK = '#f4bcb3';
  const HUB = '#016db7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e08585';
  const GRAY = '#666666';
  const GRAY_LINK = '#b9b9b9';
  const TITLE = '#124f78';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q4-fy25',
    name: 'Tencent · Q4 FY25',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 191,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2230,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
      linkTint: {
        source: HUB,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 32, note: 21, lineGap: 6 },
    },
    annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="83" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/tencent/company-wordmark.png',
        x: 704,
        y: 274,
        width: 548,
        height: 124,
      },
      {
        key: 'business-gaming-cluster',
        href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png',
        x: 34,
        y: 360,
        width: 231,
        height: 136,
      },
      {
        key: 'business-social-networks-cluster',
        href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png',
        x: 66,
        y: 576,
        width: 148,
        height: 147,
      },
      {
        key: 'business-marketing-services-cluster',
        href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png',
        x: 74,
        y: 787,
        width: 140,
        height: 134,
      },
      {
        key: 'business-fintech-business-services-cluster',
        href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png',
        x: 81,
        y: 1013,
        width: 136,
        height: 134,
      },
    ],

    layout: {
      scale: 1.636,
      nodes: {
        gaming: { x: 516, y: 361, width: 69, height: 97 },
        social_networks: { x: 516, y: 613, width: 69, height: 50 },
        marketing_services: { x: 516, y: 817, width: 69, height: 67 },
        fintech_business_services: { x: 516, y: 1038, width: 69, height: 99 },
        others: { x: 516, y: 1286, width: 69, height: 5 },
        revenue: { x: 963, y: 603, width: 68, height: 318 },
        gross_profit: { x: 1408, y: 511, width: 69, height: 177 },
        cost_of_revenue: { x: 1408, y: 886, width: 69, height: 141 },
        other_operating_gains: { x: 1633, y: 803, width: 68, height: 2 },
        operating_profit: { x: 1855, y: 417, width: 68, height: 99 },
        operating_expenses: { x: 1855, y: 695, width: 68, height: 80 },
        investments: { x: 2187, y: 423, width: 68, height: 18 },
        net_profit: { x: 2301, y: 296, width: 68, height: 97 },
        tax: { x: 2301, y: 600, width: 68, height: 21 },
        rnd: { x: 2301, y: 737, width: 68, height: 39 },
        sm: { x: 2301, y: 939, width: 68, height: 21 },
        ga: { x: 2301, y: 1126, width: 68, height: 20 },
      },
      labels: {
        gaming: {
          blocks: [
            {
              x: 558, top: 281, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '+21% Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            {
              x: 486, top: 401, anchor: 'end',
              lines: [{ text: 'Gaming', size: 40, weight: 800 }],
            },
          ],
        },
        social_networks: {
          blocks: [
            {
              x: 558, top: 537, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '+3% Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            {
              x: 479, top: 599, anchor: 'end', lineGap: 7,
              lines: [
                { text: 'Social', size: 40, weight: 800 },
                { text: 'Networks', size: 40, weight: 800 },
              ],
            },
          ],
        },
        marketing_services: {
          blocks: [
            {
              x: 558, top: 739, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '+17% Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            {
              x: 479, top: 812, anchor: 'end', lineGap: 7,
              lines: [
                { text: 'Marketing', size: 40, weight: 800 },
                { text: 'Services', size: 40, weight: 800 },
              ],
            },
          ],
        },
        fintech_business_services: {
          blocks: [
            {
              x: 558, top: 953, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '+8% Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            {
              x: 479, top: 1015, anchor: 'end', lineGap: 7,
              lines: [
                { text: 'FinTech &', size: 36, weight: 800 },
                { text: 'Business', size: 36, weight: 800 },
                { text: 'Services', size: 36, weight: 800 },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 551, top: 1199, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400, color: GRAY },
                { text: '+13% Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            {
              x: 479, top: 1267, anchor: 'end',
              lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1002, top: 450, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '+13% Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1443, top: 312, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '56% margin', size: 22, weight: 400, color: GRAY },
                { text: '+3pp Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1444, top: 1046, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        other_operating_gains: {
          blocks: [
            {
              x: 1667, top: 815, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Other', size: 26, weight: 800 },
                { text: '$value', size: 25, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1892, top: 254, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating profit', size: 35, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '31% margin', size: 22, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1907, top: 814, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        investments: {
          blocks: [
            {
              x: 2218, top: 448, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Investments', size: 25, weight: 800 },
                { text: '$value', size: 25, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2496, top: 300, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '30% margin', size: 22, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2492, top: 579, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Tax', size: 26, weight: 800 },
                { text: '(12.6B)', size: 26, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2507, top: 704, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Research &', size: 25, weight: 800 },
                { text: 'development', size: 25, weight: 800 },
                { text: '(23.8B)', size: 25, weight: 400 },
                { text: '12% of revenue', size: 22, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2507, top: 910, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Sales &', size: 25, weight: 800 },
                { text: 'marketing', size: 25, weight: 800 },
                { text: '(13.0B)', size: 25, weight: 400 },
                { text: '7% of revenue', size: 22, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2507, top: 1108, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'General &', size: 25, weight: 800 },
                { text: 'admin', size: 25, weight: 800 },
                { text: '(12.5B)', size: 25, weight: 400 },
                { text: '6% of revenue', size: 22, weight: 400, color: GRAY },
                { text: '(0pp) Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'gaming', col: 0, order: 0, type: 'source',
        label: 'Gaming', value: 59.3, notes: ['+21% Y/Y'],
        color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK,
      },
      {
        id: 'social_networks', col: 0, order: 1, type: 'source',
        label: ['Social', 'Networks'], value: 30.6, notes: ['+3% Y/Y'],
        color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK,
      },
      {
        id: 'marketing_services', col: 0, order: 2, type: 'source',
        label: ['Marketing', 'Services'], value: 41.1, notes: ['+17% Y/Y'],
        color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK,
      },
      {
        id: 'fintech_business_services', col: 0, order: 3, type: 'source',
        label: ['FinTech &', 'Business', 'Services'], value: 60.8, notes: ['+8% Y/Y'],
        color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK,
      },
      {
        id: 'others', col: 0, order: 4, type: 'source',
        label: 'Others', value: 2.6, notes: ['+13% Y/Y'],
        color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 194.4, notes: ['+13% Y/Y'],
        color: HUB, labelColor: HUB,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 108.3, notes: ['56% margin', '+3pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 86.1,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_operating_gains', col: 3, order: 0, type: 'profit',
        label: 'Other', value: -1.3, notes: ['operating gains'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 1, type: 'profit',
        label: 'Operating profit', value: 60.3, notes: ['31% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 2, type: 'cost',
        label: ['Operating', 'expenses'], value: 48.0,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'investments', col: 4, order: 0, type: 'profit',
        label: 'Investments', value: 11.3,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 59.1, notes: ['30% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 12.6,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 2, type: 'cost',
        label: ['Research &', 'development'], value: 23.8, notes: ['12% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 3, type: 'cost',
        label: ['Sales &', 'marketing'], value: 13.0, notes: ['7% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: ['General &', 'admin'], value: 12.5, notes: ['6% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'gaming', target: 'revenue', value: 59.3, width: 97, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 30.6, width: 50, targetOrder: 1 },
      { source: 'marketing_services', target: 'revenue', value: 41.1, width: 67, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 60.8, width: 99, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 2.6, width: 5, targetOrder: 4 },

      { source: 'revenue', target: 'gross_profit', value: 108.3, width: 177, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 86.1, width: 141, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 60.3, width: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 48.0, width: 78, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_operating_gains', target: 'operating_expenses', value: 1.3, width: 2,
        targetOrder: 1, y0: 804, y1: 774, linkTint: GREEN_LINK,
        curve: { x0: 1701, x1: 1855, c1x: 1762, c2x: 1818, c1y: 804, c2y: 774 },
      },

      { source: 'operating_profit', target: 'net_profit', value: 47.8, width: 78, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 12.6, width: 21, sourceOrder: 1 },
      { source: 'investments', target: 'net_profit', value: 11.3, width: 19, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 23.8, width: 39, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 13.0, width: 21, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 12.5, width: 20, sourceOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Tencent · 2025 财年第四季度',
        meta: {
          title: 'Tencent 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="170" y="282" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
      </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 +21%'] },
          social_networks: { label: '社交网络', notes: ['同比 +3%'] },
          marketing_services: { label: '营销服务', notes: ['同比 +17%'] },
          fintech_business_services: { label: '金融科技与企业服务', notes: ['同比 +8%'] },
          others: { label: '其他', notes: ['同比 +13%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_gains: { label: '其他', notes: ['营业收益'] },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          investments: { label: '投资收益' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 0 个百分点'] },
        },
      },
    },
  });
})();

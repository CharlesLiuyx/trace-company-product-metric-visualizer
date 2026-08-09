/* Tencent Q4 FY23 income statement — source-bound fixed Sankey layout. */
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
  const TITLE = '#155077';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q4-fy23',
    name: 'Tencent · Q4 FY23',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      hidePeriodStamp: true,
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 191,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2230,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
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
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="348" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/tencent/company-wordmark-q3-fy24.png',
        x: 712,
        y: 303,
        width: 525,
        height: 87,
      },
      {
        key: 'business-gaming-cluster',
        href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png',
        x: 33,
        y: 419,
        width: 233,
        height: 137,
      },
      {
        key: 'business-social-networks-cluster',
        href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png',
        x: 65,
        y: 651,
        width: 147,
        height: 147,
      },
      {
        key: 'business-marketing-services-cluster',
        href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png',
        x: 81,
        y: 881,
        width: 141,
        height: 134,
      },
      {
        key: 'business-fintech-business-services-cluster',
        href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png',
        x: 88,
        y: 1102,
        width: 137,
        height: 135,
      },
    ],

    layout: {
      scale: 2.107,
      nodes: {
        gaming: { x: 518, y: 485, width: 66, height: 85 },
        social_networks: { x: 518, y: 708, width: 66, height: 58 },
        advertising: { x: 518, y: 909, width: 66, height: 62 },
        finance_business_services: { x: 518, y: 1108, width: 66, height: 113 },
        others: { x: 518, y: 1353, width: 66, height: 3 },
        revenue: { x: 952, y: 706, width: 65, height: 327 },
        gross_profit: { x: 1384, y: 599, width: 66, height: 162 },
        cost_of_revenue: { x: 1384, y: 972, width: 66, height: 162 },
        other_operating_gains: { x: 1690, y: 636, width: 66, height: 2 },
        operating_profit: { x: 1810, y: 504, width: 65, height: 85 },
        operating_expenses: { x: 1810, y: 806, width: 65, height: 79 },
        net_profit: { x: 2250, y: 418, width: 66, height: 57 },
        tax: { x: 2250, y: 651, width: 66, height: 18 },
        other: { x: 2250, y: 779, width: 66, height: 7 },
        rnd: { x: 2250, y: 939, width: 66, height: 33 },
        ga: { x: 2250, y: 1117, width: 66, height: 21 },
        sm: { x: 2250, y: 1273, width: 66, height: 21 },
      },
      labels: {
        gaming: {
          blocks: [
            {
              x: 562, top: 397, anchor: 'middle', lineGap: 7,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '(2%) Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            { x: 491, top: 506, anchor: 'end', lines: [{ text: 'Gaming', size: 40, weight: 800 }] },
          ],
        },
        social_networks: {
          blocks: [
            {
              x: 560, top: 612, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '(2%) Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            {
              x: 486, top: 687, anchor: 'end', lineGap: 7,
              lines: [
                { text: 'Social', size: 40, weight: 800 },
                { text: 'Networks', size: 40, weight: 800 },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 563, top: 820, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '+21% Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            { x: 492, top: 916, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
          ],
        },
        finance_business_services: {
          blocks: [
            {
              x: 555, top: 1018, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400 },
                { text: '+15% Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            {
              x: 486, top: 1101, anchor: 'end', lineGap: 7,
              lines: [
                { text: 'Finance &', size: 36, weight: 800 },
                { text: 'Business', size: 36, weight: 800 },
                { text: 'Services', size: 36, weight: 800 },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 555, top: 1266, anchor: 'middle', lineGap: 6,
              lines: [
                { text: '$value', size: 32, weight: 400, color: GRAY },
                { text: '(27%) Y/Y', size: 21, weight: 400, color: GRAY },
              ],
            },
            { x: 500, top: 1317, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Others', size: 40, weight: 800, color: GRAY }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 989, top: 562, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '+7% Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1424, top: 429, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '50% margin', size: 22, weight: 400, color: GRAY },
                { text: '+7pp Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1421, top: 1156, anchor: 'middle', lineGap: 7,
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
              x: 1721, top: 661, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Other gains', size: 26, weight: 800 },
                { text: '$value', size: 25, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1850, top: 338, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating profit', size: 35, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '27% margin', size: 22, weight: 400, color: GRAY },
                { text: '+7pp Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1840, top: 908, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2429, top: 412, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
                { text: '18% margin', size: 22, weight: 400, color: GRAY },
                { text: '(56pp) Y/Y', size: 22, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2427, top: 622, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Tax', size: 26, weight: 800 },
                { text: '$value', size: 26, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2428, top: 740, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 26, weight: 800 },
                { text: '$value', size: 26, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2434, top: 906, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Research &', size: 25, weight: 800 },
                { text: 'development', size: 25, weight: 800 },
                { text: '$value', size: 25, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2438, top: 1077, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'General &', size: 25, weight: 800 },
                { text: 'admin', size: 25, weight: 800 },
                { text: '$value', size: 25, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2442, top: 1233, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Sales &', size: 25, weight: 800 },
                { text: 'marketing', size: 25, weight: 800 },
                { text: '$value', size: 25, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'gaming', col: 0, order: 0, type: 'source', label: 'Gaming', value: 40.9, notes: ['(2%) Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'social_networks', col: 0, order: 1, type: 'source', label: ['Social', 'Networks'], value: 28.2, notes: ['(2%) Y/Y'], color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 29.8, notes: ['+21% Y/Y'], color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK },
      { id: 'finance_business_services', col: 0, order: 3, type: 'source', label: ['Finance &', 'Business', 'Services'], value: 54.4, notes: ['+15% Y/Y'], color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK },
      { id: 'others', col: 0, order: 4, type: 'source', label: 'Others', value: 1.9, notes: ['(27%) Y/Y'], color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 155.2, notes: ['+7% Y/Y'], color: HUB, labelColor: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 77.6, notes: ['50% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 77.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_gains', col: 3, order: 0, type: 'profit', label: 'Other gains', value: 2.0, valueText: '2.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: 'Operating profit', value: 41.4, notes: ['27% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 38.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 27.8, notes: ['18% margin', '(56pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 9.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 3.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: ['Research &', 'development'], value: 16.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: ['General &', 'admin'], value: 10.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 5, type: 'cost', label: ['Sales &', 'marketing'], value: 11.0, valueText: '(11.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'gaming', target: 'revenue', value: 40.9, sourceWidth: 85, targetWidth: 85, y0: 527.5, y1: 748.5, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 28.2, sourceWidth: 58, targetWidth: 59, y0: 737, y1: 820.5, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 29.8, sourceWidth: 62, targetWidth: 64, y0: 940, y1: 882, targetOrder: 2 },
      { source: 'finance_business_services', target: 'revenue', value: 54.4, sourceWidth: 113, targetWidth: 117, y0: 1164.5, y1: 972.5, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 1.9, sourceWidth: 3, targetWidth: 2, y0: 1354.5, y1: 1032, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 77.6, sourceWidth: 163, targetWidth: 162, y0: 787.5, y1: 680, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 77.6, sourceWidth: 163, targetWidth: 162, y0: 951.5, y1: 1053, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 39.4, sourceWidth: 81, targetWidth: 83, y0: 639.5, y1: 545.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 38.2, sourceWidth: 81, targetWidth: 79, y0: 720.5, y1: 845.5, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_operating_gains', target: 'operating_profit', value: 2.0, width: 2,
        y0: 637, y1: 588, targetOrder: 1,
        curve: { x0: 1756, x1: 1810, c1x: 1780, c2x: 1796, c1y: 637, c2y: 588 },
      },
      { source: 'operating_profit', target: 'net_profit', value: 27.8, sourceWidth: 56, targetWidth: 57, y0: 532, y1: 446.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 9.7, width: 18, y0: 569, y1: 660, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 3.9, sourceWidth: 11, targetWidth: 7, y0: 583.5, y1: 782.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 16.4, sourceWidth: 35, targetWidth: 33, y0: 823.5, y1: 955.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 10.8, sourceWidth: 22, targetWidth: 21, y0: 852, y1: 1127.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 11.0, sourceWidth: 22, targetWidth: 21, y0: 874, y1: 1283.5, sourceOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Tencent · 2023 财年第四季度',
        meta: { title: 'Tencent 2023 财年第四季度利润表', period: '2023 财年第四季度', periodNote: '截至 2023 年 12 月' },
        annotationsSvg: `
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="348" y="273" text-anchor="middle" font-size="40" font-weight="800" fill="${TITLE}">单位：人民币</text>
      </g>`,
        nodes: {
          gaming: { label: '游戏', notes: ['同比 (2%)'] },
          social_networks: { label: '社交网络', notes: ['同比 (2%)'] },
          advertising: { label: '广告', notes: ['同比 +21%'] },
          finance_business_services: { label: '金融科技与企业服务', notes: ['同比 +15%'] },
          others: { label: '其他', notes: ['同比 (27%)'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +7 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          other_operating_gains: { label: '其他收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 (56 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          sm: { label: '销售与市场' },
        },
        layout: {
          labels: {
            finance_business_services: {
              blocks: [
                {
                  x: 555, top: 1018, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '$value', size: 32, weight: 400 },
                    { text: '同比 +15%', size: 21, weight: 400, color: GRAY },
                  ],
                },
                {
                  x: 486, top: 1117, anchor: 'end', lineGap: 7,
                  lines: [
                    { text: '金融科技与', size: 36, weight: 800 },
                    { text: '企业服务', size: 36, weight: 800 },
                  ],
                },
              ],
            },
            other_operating_gains: {
              blocks: [
                {
                  x: 1721, top: 661, anchor: 'middle', lineGap: 6,
                  lines: [
                    { text: '其他收益', size: 26, weight: 800 },
                    { text: '$value', size: 25, weight: 400 },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();

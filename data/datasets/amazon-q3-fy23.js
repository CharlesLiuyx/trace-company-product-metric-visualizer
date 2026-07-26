/* Amazon · Q3 FY23 income statement ($B), reconstructed from the Source. */
(function () {
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2350;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = (zh = false) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 655, 293, 0.98)}
      ${icon('amazonDotCom', 111, 447, 0.72)}
      ${icon('amazonSubscriptionCluster', 104, 943, 0.47)}
      ${icon('amazonAdvertisingCluster', 116, 1089, 0.48)}
      ${icon('amazonAws', 204, 1199, 0.46)}

      <g transform="translate(1716 500)">
        <path d="M38 144H248C264 144 273 135 273 119V38C273 24 264 15 248 15H141L116 0L91 15H38C24 15 15 24 15 38V119C15 135 24 144 38 144Z"
          fill="${BG}" stroke="#1d1d1d" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 40, 31, 0.17)}
          <text x="151" y="61" font-size="33" font-weight="400" fill="${GREEN_LABEL}">$7.0B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <text x="38" y="116" font-size="34" font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="151" y="116" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$4.2B</text>
        </g>
      </g>

      <g class="sankey-interactive-annotation" data-node="other_income">
        <path d="M2135 437H2207" fill="none" stroke="${GREEN}" stroke-width="2"/>
        <path d="M2207 437C2228 437 2235 372 2265 372"
          fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
        <text x="2130" y="479" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
        <text x="2130" y="519" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$1.0B</text>
      </g>
    </g>`;

  const labels = (zh = false) => ({
    online_stores: {
      blocks: [
        {
          x: 341, top: 400, anchor: 'end', semanticRole: 'source-group',
          lines: [{ text: zh ? '线上商店' : 'Online Store', size: 38, weight: 800, color: '#111111' }],
        },
        {
          x: 423, top: 300, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 34, weight: 400, color: '#111111' },
            { text: zh ? '同比 +7%' : '+7% Y/Y', size: 23, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    physical_store: {
      blocks: [
        {
          x: 337, top: 609, anchor: 'end', semanticRole: 'source-group',
          lines: [{ text: zh ? '实体商店' : 'Physical Store', size: 38, weight: 800, color: '#111111' }],
        },
        {
          x: 433, top: 548, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 34, weight: 400, color: '#111111' },
            { text: zh ? '同比 +6%' : '+6% Y/Y', size: 23, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    third_party_seller_services: {
      blocks: [
        {
          x: 339, top: 731, anchor: 'end', lineGap: 9, semanticRole: 'source-group',
          lines: zh
            ? [
                { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                { text: '服务', size: 38, weight: 800, color: '#111111' },
              ]
            : [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
        },
        {
          x: 421, top: 661, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 34, weight: 400, color: '#111111' },
            { text: zh ? '同比 +20%' : '+20% Y/Y', size: 23, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 338, top: 889, anchor: 'end', semanticRole: 'source-group',
          lines: [{ text: zh ? '订阅' : 'Subscription', size: 38, weight: 800, color: '#111111' }],
        },
        {
          x: 420, top: 855, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 34, weight: 400, color: '#111111' },
            { text: zh ? '同比 +14%' : '+14% Y/Y', size: 23, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    advertising: {
      blocks: [
        {
          x: 336, top: 1040, anchor: 'end', semanticRole: 'source-group',
          lines: [{ text: zh ? '广告' : 'Advertising', size: 38, weight: 800, color: '#111111' }],
        },
        {
          x: 418, top: 979, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 34, weight: 400, color: '#111111' },
            { text: zh ? '同比 +26%' : '+26% Y/Y', size: 23, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    aws: {
      blocks: [{
        x: 432, top: 1106, anchor: 'middle', lineGap: 8,
        lines: [
          { text: '$value', size: 34, weight: 400, color: '#111111' },
          { text: zh ? '同比 +12%' : '+12% Y/Y', size: 23, weight: 400, color: NOTE },
        ],
      }],
    },
    other_revenue: {
      blocks: [
        {
          x: 333, top: 1317, anchor: 'end', semanticRole: 'source-group',
          lines: [{ text: zh ? '其他' : 'Other', size: 38, weight: 800, color: '#111111' }],
        },
        {
          x: 433, top: 1272, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 34, weight: 400, color: '#111111' },
            { text: zh ? '同比 (3%)' : '(3%) Y/Y', size: 23, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [{
        x: 902, top: 506, anchor: 'middle', lineGap: 12,
        lines: [
          { text: zh ? '收入' : 'Revenue', size: 42, weight: 800, color: '#111111' },
          { text: '$value', size: 38, weight: 400, color: '#111111' },
          { text: zh ? '同比 +13%' : '+13% Y/Y', size: 26, weight: 400, color: NOTE },
        ],
      }],
    },
    gross_profit: {
      blocks: [{
        x: 1362, top: 371, anchor: 'middle', lineGap: 11,
        lines: [
          { text: zh ? '毛利润' : 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: zh ? '利润率 48%' : '48% margin', size: 28, weight: 400, color: NOTE },
          { text: zh ? '同比 +3 个百分点' : '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    cost_of_sales: {
      blocks: [{
        x: 1366, top: 1136, anchor: 'middle', lineGap: 11,
        lines: [
          { text: zh ? '销售成本' : 'Cost of sales', size: 38, weight: 800, color: RED_LABEL },
          { text: '$value', size: 37, weight: 400, color: RED_LABEL },
        ],
      }],
    },
    operating_profit: {
      blocks: [{
        x: 1840, top: 282, anchor: 'middle', lineGap: 10,
        lines: [
          { text: zh ? '营业利润' : 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: zh ? '利润率 8%' : '8% margin', size: 28, weight: 400, color: NOTE },
          { text: zh ? '同比 +6 个百分点' : '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    operating_expenses: {
      blocks: [{
        x: 1837, top: 1001, anchor: 'middle', lineGap: 10,
        lines: [
          { text: zh ? '运营' : 'Operating', size: 39, weight: 800, color: RED_LABEL },
          { text: zh ? '费用' : 'expenses', size: 39, weight: 800, color: RED_LABEL },
          { text: '$value', size: 37, weight: 400, color: RED_LABEL },
        ],
      }],
    },
    net_profit: {
      blocks: [{
        x: 2360, top: 331, anchor: 'start', lineGap: 10,
        lines: [
          { text: zh ? '净利润' : 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          { text: zh ? '利润率 7%' : '7% margin', size: 28, weight: 400, color: NOTE },
          { text: zh ? '同比 +5 个百分点' : '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    tax: {
      blocks: [{
        x: 2450, top: 576, anchor: 'middle', lineGap: 8,
        lines: [
          { text: zh ? '税费' : 'Tax', size: 30, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }],
    },
    fulfillment: {
      blocks: [{
        x: RIGHT_LABEL_X, top: 724, anchor: 'start', lineGap: 8,
        lines: [
          { text: zh ? '履约 ($22.3B)' : 'Fulfillment ($22.3B)', size: 28, weight: 800, color: RED_LABEL },
          { text: zh ? '占收入 16%' : '16% of revenue', size: 28, weight: 400, color: NOTE },
          { text: zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    technology_content: {
      blocks: [{
        x: 2362, top: 878, anchor: 'start', lineGap: 8,
        lines: [
          { text: zh ? '技术与内容 ($21.2B)' : 'Technology &', size: 29, weight: 800, color: RED_LABEL },
          ...(zh ? [] : [{ text: 'content ($21.2B)', size: 29, weight: 800, color: RED_LABEL }]),
          { text: zh ? '占收入 15%' : '15% of revenue', size: 28, weight: 400, color: NOTE },
          { text: zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    sm: {
      blocks: [{
        x: 2381, top: 1058, anchor: 'start', lineGap: 8,
        lines: [
          { text: zh ? '销售与市场 ($10.6B)' : 'S&M ($10.6B)', size: 29, weight: 800, color: RED_LABEL },
          { text: zh ? '占收入 7%' : '7% of revenue', size: 28, weight: 400, color: NOTE },
          { text: zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    ga: {
      blocks: [{
        x: 2392, top: 1203, anchor: 'start', lineGap: 8,
        lines: [
          { text: zh ? '管理费用 ($2.6B)' : 'G&A ($2.6B)', size: 29, weight: 800, color: RED_LABEL },
          { text: zh ? '占收入 2%' : '2% of revenue', size: 28, weight: 400, color: NOTE },
          { text: zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    other_opex: {
      blocks: [{
        x: 2359, top: 1317, anchor: 'start',
        lines: [{
          text: zh ? '其他运营费用 ($0.2B)' : 'Other opex ($0.2B)',
          size: 27,
          weight: 800,
          color: RED_LABEL,
        }],
      }],
    },
    // The Source already labels this route through annotationsSvg. Suppress
    // the route node's automatic label so the $1.0B callout renders once.
    other_income: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q3-fy23',
    name: 'Amazon · Q3 FY23',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2240,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: '#111111' },
        hub: { node: ORANGE, label: '#111111' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 2.32,
      routes: {
        other_income: { x: 2207, y: 437, width: 0, height: 1 },
      },
      nodes: {
        online_stores: { x: 397, y: 383, width: 71, height: 133 },
        physical_store: { x: 397, y: 632, width: 71, height: 10 },
        third_party_seller_services: { x: 397, y: 747, width: 71, height: 79 },
        subscription: { x: 397, y: 940, width: 71, height: 21 },
        advertising: { x: 397, y: 1063, width: 71, height: 26 },
        aws: { x: 397, y: 1193, width: 71, height: 51 },
        other_revenue: { x: 397, y: 1355, width: 71, height: 2 },
        revenue: { x: 867, y: 657, width: 70, height: 336 },
        gross_profit: { x: 1326, y: 555, width: 71, height: 157 },
        cost_of_sales: { x: 1331, y: 919, width: 71, height: 174 },
        operating_profit: { x: 1804, y: 465, width: 70, height: 25 },
        operating_expenses: { x: 1801, y: 855, width: 70, height: 131 },
        net_profit: { x: 2265, y: 351, width: 71, height: 21 },
        tax: { x: 2265, y: 605, width: 71, height: 4 },
        fulfillment: { x: 2265, y: 712, width: 71, height: 52 },
        technology_content: { x: 2265, y: 883, width: 71, height: 47 },
        sm: { x: 2265, y: 1060, width: 71, height: 24 },
        ga: { x: 2265, y: 1217, width: 71, height: 3 },
        other_opex: { x: 2265, y: 1343, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      {
        id: 'other_income',
        representation: 'flow',
        label: 'Other',
        value: 1.0,
        valueText: '$1.0B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'aws_operating_profit',
        representation: 'annotation',
        label: 'AWS operating profit',
        value: 7.0,
        valueText: '$7.0B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'other_operating_profit',
        representation: 'annotation',
        label: 'Other operating profit',
        value: 4.2,
        valueText: '$4.2B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Store', value: 57.3, notes: ['+7% Y/Y'] },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.0, notes: ['+6% Y/Y'] },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 34.3, notes: ['+20% Y/Y'] },
      { id: 'subscription', col: 0, order: 3, type: 'source', label: 'Subscription', value: 10.2, notes: ['+14% Y/Y'] },
      { id: 'advertising', col: 0, order: 4, type: 'source', label: 'Advertising', value: 12.1, notes: ['+26% Y/Y'] },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 23.1, notes: ['+12% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.2, notes: ['(3%) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 143.1, notes: ['+13% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 68.1, notes: ['48% margin', '+3pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 75.0 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 11.2, notes: ['8% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 56.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 9.9, notes: ['7% margin', '+5pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.3 },
      { id: 'fulfillment', col: 5, order: 2, type: 'cost', label: 'Fulfillment', value: 22.3, notes: ['16% of revenue', '(1pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 3, type: 'cost', label: 'Technology & content', value: 21.2, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 10.6, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.6, notes: ['2% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 0.2, valueText: '$0.2B' },
    ],
    links: [
      { source: 'online_stores', target: 'revenue', value: 57.3, sourceWidth: 133, targetWidth: 134.45, y0: 449.5, y1: 724.225, sourceOrder: 0, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.0, sourceWidth: 10, targetWidth: 11.73, y0: 637, y1: 797.315, sourceOrder: 0, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 34.3, sourceWidth: 79, targetWidth: 80.47, y0: 786.5, y1: 843.415, sourceOrder: 0, targetOrder: 2 },
      { source: 'subscription', target: 'revenue', value: 10.2, sourceWidth: 21, targetWidth: 23.93, y0: 950.5, y1: 895.615, sourceOrder: 0, targetOrder: 3 },
      { source: 'advertising', target: 'revenue', value: 12.1, sourceWidth: 26, targetWidth: 28.39, y0: 1076, y1: 921.775, sourceOrder: 0, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 23.1, sourceWidth: 51, targetWidth: 54.2, y0: 1218.5, y1: 963.07, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.2, sourceWidth: 2, targetWidth: 2.82, y0: 1356, y1: 991.58, sourceOrder: 0, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 68.1, sourceWidth: 160, targetWidth: 157, y0: 737, y1: 633.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 75.0, sourceWidth: 176, targetWidth: 174, y0: 905, y1: 1006, sourceOrder: 1, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 11.2, sourceWidth: 26, targetWidth: 25, y0: 568, y1: 477.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 56.9, sourceWidth: 131, targetWidth: 131, y0: 646.5, y1: 920.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 8.9, sourceWidth: 20, targetWidth: 21, y0: 475, y1: 361.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.3, sourceWidth: 5, targetWidth: 4, y0: 487.5, y1: 607, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 1.0, sourceWidth: 2, targetWidth: 2, y0: 437, y1: 371, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'fulfillment', value: 22.3, sourceWidth: 51, targetWidth: 52, y0: 880.5, y1: 738, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_content', value: 21.2, sourceWidth: 49, targetWidth: 47, y0: 930.5, y1: 906.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 10.6, sourceWidth: 24, targetWidth: 24, y0: 967, y1: 1072, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 2.6, sourceWidth: 6, targetWidth: 3, y0: 982, y1: 1218.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 1, targetWidth: 3, y0: 985.5, y1: 1344.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Amazon · 2023 财年第三季度',
        meta: {
          title: 'Amazon 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          titleSize: 112,
          titleTextLength: 1780,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          other_income: { label: '其他' },
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他业务营业利润' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +7%'] },
          physical_store: { label: '实体商店', notes: ['同比 +6%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +20%'] },
          subscription: { label: '订阅', notes: ['同比 +14%'] },
          advertising: { label: '广告', notes: ['同比 +26%'] },
          aws: { label: 'AWS', notes: ['同比 +12%'] },
          other_revenue: { label: '其他', notes: ['同比 (3%)'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 +3 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

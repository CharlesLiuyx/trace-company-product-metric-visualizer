/* Amazon Q1 FY24 income statement ($B), reconstructed from the Source. */
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
  const RIGHT_LABEL_X = 2352;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = (zh = false) => `
    <g>
      ${icon('amazonCompanyWordmark', 702, 287, 0.98)}
      ${icon('amazonDotCom', 101, 417, 0.72)}
      <text x="345" y="387" text-anchor="end" font-family="Noto Sans,Arial,sans-serif"
        font-size="38" font-weight="800" fill="#111111">${zh ? '线上商店' : 'Online Store'}</text>
      ${icon('amazonAdvertisingCluster', 77, 897, 0.48)}
      ${icon('amazonSubscriptionCluster', 106, 1040, 0.47)}
      ${icon('amazonAws', 205, 1148, 0.46)}

      <g transform="translate(1701 510)" font-family="Noto Sans,Arial,sans-serif">
        <path d="M18 146H210Q228 146 228 128V48Q228 30 210 30H142L115 0L88 30H18Q0 30 0 48V128Q0 146 18 146Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="3"/>
        ${icon('amazonAws', 30, 37, 0.16)}
        <text x="127" y="69" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$9.4B</text>
        <text x="22" y="126" font-size="32" font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
        <text x="127" y="127" font-size="28" font-weight="400" fill="${GREEN_LABEL}">$5.9B</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q1-fy24',
    name: 'Amazon · Q1 FY24',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q1 FY24 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2245,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
      interfaceAudit: { mode: 'error' },
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),

    layout: {
      scale: 2.32,
      nodes: {
        online_stores: { x: 392, y: 336, width: 72, height: 126 },
        physical_store: { x: 392, y: 588, width: 72, height: 11 },
        third_party_seller_services: { x: 392, y: 708, width: 72, height: 80 },
        advertising: { x: 392, y: 907, width: 72, height: 25 },
        subscription: { x: 392, y: 1039, width: 72, height: 26 },
        aws: { x: 392, y: 1177, width: 72, height: 58 },
        other_revenue: { x: 392, y: 1338, width: 72, height: 4 },
        revenue: { x: 857, y: 654, width: 72, height: 334 },
        gross_profit: { x: 1326, y: 552, width: 72, height: 164 },
        cost_of_sales: { x: 1328, y: 928, width: 72, height: 169 },
        operating_profit: { x: 1784, y: 462, width: 72, height: 35 },
        operating_expenses: { x: 1791, y: 846, width: 72, height: 129 },
        net_profit: { x: 2260, y: 327, width: 72, height: 23 },
        tax: { x: 2260, y: 527, width: 72, height: 7 },
        other_expense: { x: 2260, y: 632, width: 72, height: 7 },
        fulfillment: { x: 2260, y: 722, width: 72, height: 52 },
        technology_content: { x: 2260, y: 911, width: 72, height: 48 },
        sm: { x: 2260, y: 1089, width: 72, height: 23 },
        ga: { x: 2260, y: 1227, width: 72, height: 7 },
        other_opex: { x: 2260, y: 1346, width: 72, height: 5 },
      },
      labels: {
        online_stores: {
          blocks: [{
            x: 428, top: 249, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 34, weight: 400, color: '#111111' },
              { text: '+7% Y/Y', size: 23, weight: 400, color: NOTE },
            ],
          }],
        },
        physical_store: {
          blocks: [
            {
              x: 333, top: 568, anchor: 'end',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 502, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+6% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        third_party_seller_services: {
          blocks: [
            {
              x: 345, top: 702, anchor: 'end', lineGap: 9,
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 428, top: 622, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+16% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [{
            x: 428, top: 823, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 34, weight: 400, color: '#111111' },
              { text: '+24% Y/Y', size: 23, weight: 400, color: NOTE },
            ],
          }],
        },
        subscription: {
          blocks: [{
            x: 428, top: 956, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 34, weight: 400, color: '#111111' },
              { text: '+11% Y/Y', size: 23, weight: 400, color: NOTE },
            ],
          }],
        },
        aws: {
          blocks: [{
            x: 428, top: 1091, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 34, weight: 400, color: '#111111' },
              { text: '+17% Y/Y', size: 23, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [
            {
              x: 328, top: 1317, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 1257, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+23% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [{
            x: 893, top: 501, anchor: 'middle', lineGap: 12,
            lines: [
              { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
              { text: '$value', size: 38, weight: 400, color: '#111111' },
              { text: '+13% Y/Y', size: 26, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1362, top: 361, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '49% margin', size: 28, weight: 400, color: NOTE },
              { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_sales: {
          blocks: [{
            x: 1364, top: 1111, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'Cost of sales', size: 38, weight: 800, color: RED_LABEL },
              { text: '$value', size: 37, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1820, top: 274, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '11% margin', size: 28, weight: 400, color: NOTE },
              { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1827, top: 989, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 39, weight: 800, color: RED_LABEL },
              { text: 'expenses', size: 39, weight: 800, color: RED_LABEL },
              { text: '$value', size: 37, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2360, top: 284, anchor: 'start', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              { text: '7% margin', size: 28, weight: 400, color: NOTE },
              { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2456, top: 494, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2461, top: 595, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Other', size: 30, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        fulfillment: {
          blocks: [{
            x: 2348, top: 728, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Fulfillment ($22.3B)', size: 28, weight: 800, color: RED_LABEL },
              { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        technology_content: {
          blocks: [{
            x: 2367, top: 896, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
              { text: 'content ($20.4B)', size: 29, weight: 800, color: RED_LABEL },
              { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        sm: {
          blocks: [{
            x: 2384, top: 1068, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'S&M ($9.7B)', size: 29, weight: 800, color: RED_LABEL },
              { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        ga: {
          blocks: [{
            x: 2392, top: 1201, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'G&A ($2.7B)', size: 29, weight: 800, color: RED_LABEL },
              { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_opex: {
          blocks: [{
            x: 2358, top: 1329, anchor: 'start',
            lines: [{ text: 'Other opex ($0.2B)', size: 27, weight: 800, color: RED_LABEL }],
          }],
        },
      },
    },

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Store', value: 54.7, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.2, notes: ['+6% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 34.6, notes: ['+16% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 11.8, notes: ['+24% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 10.7, notes: ['+11% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 25.0, notes: ['+17% Y/Y'], valueText: '$25.0B', color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.3, notes: ['+23% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 143.3, notes: ['+13% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 70.7, notes: ['49% margin', '+3pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 72.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 15.3, notes: ['11% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 55.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 10.4, notes: ['7% margin', '+5pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.5 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 2.4 },
      { id: 'fulfillment', col: 5, order: 3, type: 'cost', label: 'Fulfillment', value: 22.3, notes: ['16% of revenue', '(1pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 4, type: 'cost', label: 'Technology & content', value: 20.4, notes: ['14% of revenue', '(2pp) Y/Y'] },
      { id: 'sm', col: 5, order: 5, type: 'cost', label: 'S&M', value: 9.7, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 2.7, notes: ['2% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 7, type: 'cost', label: 'Other opex', value: 0.2 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 54.7, sourceWidth: 125, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.2, sourceWidth: 10, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 34.6, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 11.8, sourceWidth: 25, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 10.7, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 25.0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 70.7, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 72.6, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 15.3, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 55.4, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 10.4, sourceOrder: 0, targetOrder: 0, targetWidth: 22 },
      { source: 'operating_profit', target: 'tax', value: 2.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 2.4, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'fulfillment', value: 22.3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 20.4, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 9.7, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 2.7, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, targetOrder: 4, targetWidth: 3 },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2024 财年第一季度',
        meta: { title: 'Amazon 2024 财年第一季度利润表' },
        annotationsSvg: annotations(true),
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +7%'] },
          physical_store: { label: '实体商店', notes: ['同比 +6%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +16%'] },
          advertising: { label: '广告', notes: ['同比 +24%'] },
          subscription: { label: '订阅', notes: ['同比 +11%'] },
          aws: { label: 'AWS', notes: ['同比 +17%'] },
          other_revenue: { label: '其他', notes: ['同比 +23%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 +3 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 14%', '同比 (2 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: {
          labels: {
            third_party_seller_services: {
              blocks: [
                {
                  x: 340, top: 702, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                    { text: '服务', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 428, top: 622, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 +16%', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [{
                x: 2384, top: 1068, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售与市场 ($9.7B)', size: 29, weight: 800, color: RED_LABEL },
                  { text: '占收入 7%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            ga: {
              blocks: [{
                x: 2392, top: 1201, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '管理费用 ($2.7B)', size: 29, weight: 800, color: RED_LABEL },
                  { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();

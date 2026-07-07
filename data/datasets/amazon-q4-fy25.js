/* ====================================================================
 * Amazon - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/amazon-q4-fy25.png as a fixed
 * d3-sankey layout with reusable SVG/text Amazon business annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca7f';
  const GREEN = '#25a126';
  const GREEN_LABEL = '#009a4b';
  const GREEN_LINK = '#9aca99';
  const RED = '#d60000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e18182';
  const NOTE = '#666666';
  const TITLE = '#15527a';
  const RIGHT_LABEL_X = 2352;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 702, 287, 0.98)}
      ${icon('amazonDotCom', 101, 417, 0.72)}
      ${icon('amazonPhysicalStores', 96, 562, 0.72)}
      ${icon('amazonAdvertisingCluster', 77, 897, 0.48)}
      ${icon('amazonSubscriptionCluster', 106, 1040, 0.47)}
      ${icon('amazonAws', 205, 1148, 0.46)}

      <g transform="translate(1716 474)">
        <path d="M38 108H248C264 108 273 99 273 83V38C273 24 264 15 248 15H126L104 0L82 15H38C24 15 15 24 15 38V83C15 99 24 108 38 108Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="4"/>
        ${icon('amazonAws', 40, 30, 0.17)}
        <text x="150" y="58" font-size="33" font-weight="400" fill="${GREEN_LABEL}">$12.5B</text>
        <text x="40" y="90" font-size="34" font-weight="800" fill="#333333">Other</text>
        <text x="150" y="91" font-size="28" font-weight="400" fill="${GREEN_LABEL}">$12.5B</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q4-fy25',
    name: 'Amazon · Q4 FY25',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q4 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q4-fy25.png', width: 2667, height: 1500 },
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
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 1.744,
      nodes: {
        online_stores: { x: 395, y: 346, width: 72, height: 145 },
        physical_store: { x: 395, y: 608, width: 72, height: 10 },
        third_party_seller_services: { x: 395, y: 720, width: 72, height: 92 },
        advertising: { x: 395, y: 916, width: 72, height: 37 },
        subscription: { x: 395, y: 1037, width: 72, height: 23 },
        aws: { x: 395, y: 1174, width: 72, height: 62 },
        other_revenue: { x: 395, y: 1344, width: 72, height: 3 },
        revenue: { x: 862, y: 646, width: 72, height: 372 },
        gross_profit: { x: 1328, y: 522, width: 72, height: 180 },
        cost_of_sales: { x: 1328, y: 931, width: 72, height: 192 },
        operating_profit: { x: 1796, y: 409, width: 72, height: 44 },
        operating_expenses: { x: 1796, y: 729, width: 72, height: 137 },
        other_income: { x: 2145, y: 386, width: 72, height: 3 },
        net_profit: { x: 2263, y: 300, width: 72, height: 37 },
        tax: { x: 2263, y: 534, width: 72, height: 9 },
        fulfillment: { x: 2263, y: 669, width: 72, height: 54 },
        technology_content: { x: 2263, y: 840, width: 72, height: 51 },
        sm: { x: 2263, y: 1012, width: 72, height: 25 },
        ga: { x: 2263, y: 1164, width: 72, height: 5 },
        other_opex: { x: 2263, y: 1306, width: 72, height: 2 },
      },
      labels: {
        online_stores: {
          blocks: [
            {
              x: 345, top: 356, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Online Stores', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 428, top: 270, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+10% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        physical_store: {
          blocks: [
            {
              x: 345, top: 517, anchor: 'end',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 532, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+5% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        third_party_seller_services: {
          blocks: [
            {
              x: 345, top: 695, anchor: 'end', lineGap: 9,
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 428, top: 644, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+11% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 345, top: 858, anchor: 'end',
              lines: [{ text: 'Advertising', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 840, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+23% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 345, top: 1005, anchor: 'end',
              lines: [{ text: 'Subscription', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 960, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+14% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        aws: {
          blocks: [
            {
              x: 428, top: 1098, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+24% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 390, top: 1322, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 1268, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+7% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 895, top: 493, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
                { text: '$value', size: 38, weight: 400, color: '#111111' },
                { text: '+14% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1363, top: 341, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '48% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1362, top: 1142, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Cost of sales', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1830, top: 219, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '12% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1832, top: 890, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 39, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 39, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2181, top: 395, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2408, top: 274, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '10% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2477, top: 498, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        fulfillment: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 678, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Fulfillment ($30.8B)', size: 28, weight: 800, color: RED_LABEL },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        technology_content: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 808, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
                { text: 'content ($29.4B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 973, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($14.2B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1140, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($2.7B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1289, anchor: 'start',
              lines: [
                { text: 'Other opex ($1.3B)', size: 27, weight: 800, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 83.0, notes: ['+10% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.9, notes: ['+5% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 52.8, notes: ['+11% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 21.3, notes: ['+23% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 13.1, notes: ['+14% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 35.6, notes: ['+24% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.7, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 213.4, notes: ['+14% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 103.4, notes: ['48% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 110.0 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 25.0, notes: ['12% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 78.4 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 1.2, valueText: '$1.2B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 21.2, notes: ['10% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.9 },
      { id: 'fulfillment', col: 5, order: 2, type: 'cost', label: 'Fulfillment', value: 30.8, notes: ['14% of revenue', '(0pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 3, type: 'cost', label: 'Technology & content', value: 29.4, notes: ['14% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 14.2, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.7, notes: ['1% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 1.3 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 83.0, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.9, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 52.8, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 21.3, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 13.1, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 35.6, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.7, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 103.4, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 110.0, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 25.0, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 78.4, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 20.1, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.9, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 1.2, targetOrder: 1 },
      { source: 'operating_expenses', target: 'fulfillment', value: 30.8, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 29.4, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 14.2, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 2.7, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 1.3, targetOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2025 财年第四季度',
        meta: {
          title: 'Amazon 2025 财年第四季度利润表',
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +10%'] },
          physical_store: { label: '实体商店', notes: ['同比 +5%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +11%'] },
          advertising: { label: '广告', notes: ['同比 +23%'] },
          subscription: { label: '订阅', notes: ['同比 +14%'] },
          aws: { label: 'AWS', notes: ['同比 +24%'] },
          other_revenue: { label: '其他', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 14%', '同比 (0 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 14%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: {
          labels: {
            third_party_seller_services: {
              blocks: [
                {
                  x: 340, top: 707, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                    { text: '服务', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 428, top: 644, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 +11%', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 973, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($14.2B)', size: 29, weight: 800, color: RED_LABEL },
                    { text: '占收入 7%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1140, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($2.7B)', size: 29, weight: 800, color: RED_LABEL },
                    { text: '占收入 1%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
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

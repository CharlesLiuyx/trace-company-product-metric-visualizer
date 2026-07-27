/* ====================================================================
 * Amazon - Q1 FY25 income statement ($B)
 * Reconstructed from input/processed/amazon-q1-fy25.png as a fixed
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
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 702, 287, 0.98)}
      ${icon('amazonDotCom', 101, 417, 0.72)}
      ${icon('amazonPhysicalStores', 96, 562, 0.72)}
      ${icon('amazonAdvertisingCluster', 77, 897, 0.48)}
      ${icon('amazonSubscriptionCluster', 106, 1040, 0.47)}
      ${icon('amazonAws', 205, 1148, 0.46)}

      <g transform="translate(1716 467)" font-family="Noto Sans,Arial,sans-serif">
        <path d="M38 108H248C264 108 273 99 273 83V38C273 24 264 15 248 15H126L104 0L82 15H38C24 15 15 24 15 38V83C15 99 24 108 38 108Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="4"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 40, 30, 0.17)}
          <text x="150" y="58" font-size="33" font-weight="400" fill="${GREEN_LABEL}">$11.5B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <text x="40" y="90" font-size="34" font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="150" y="91" font-size="28" font-weight="400" fill="${GREEN_LABEL}">$6.9B</text>
        </g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q1-fy25',
    name: 'Amazon · Q1 FY25',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q1 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q1-fy25.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'aws_operating_profit', representation: 'annotation', label: 'AWS operating profit', value: 11.5, valueText: '$11.5B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other_operating_profit', representation: 'annotation', label: 'Other operating profit', value: 6.9, valueText: '$6.9B', type: 'profit', labelColor: GREEN_LABEL },
    ],

    layout: {
      scale: 2.14,
      nodes: {
        online_stores: { x: 396, y: 307, width: 72, height: 122 },
        physical_store: { x: 396, y: 559, width: 72, height: 9 },
        third_party_seller_services: { x: 396, y: 684, width: 72, height: 77 },
        advertising: { x: 396, y: 896, width: 72, height: 27 },
        subscription: { x: 396, y: 1043, width: 72, height: 24 },
        aws: { x: 396, y: 1181, width: 72, height: 61 },
        other_revenue: { x: 396, y: 1351, width: 72, height: 1 },
        revenue: { x: 863, y: 647, width: 72, height: 336 },
        gross_profit: { x: 1330, y: 526, width: 72, height: 170 },
        cost_of_sales: { x: 1330, y: 945, width: 72, height: 165 },
        operating_profit: { x: 1798, y: 414, width: 72, height: 39 },
        operating_expenses: { x: 1798, y: 805, width: 72, height: 130 },
        other_income: { x: 2150, y: 391, width: 72, height: 5 },
        net_profit: { x: 2264, y: 305, width: 72, height: 35 },
        tax: { x: 2264, y: 529, width: 72, height: 8 },
        fulfillment: { x: 2264, y: 609, width: 72, height: 52 },
        technology_content: { x: 2264, y: 812, width: 72, height: 48 },
        sm: { x: 2264, y: 1007, width: 72, height: 20 },
        ga: { x: 2264, y: 1177, width: 72, height: 4 },
        other_opex: { x: 2264, y: 1333, width: 72, height: 1 },
      },
      labels: {
        online_stores: {
          blocks: [
            {
              x: 329, top: 324, anchor: 'end', lineGap: 9,
              semanticRole: 'reference-offset-side-label',
              lines: [
                { text: 'Online Stores', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 432, top: 231, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+5% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        physical_store: {
          blocks: [
            {
              x: 325, top: 495, anchor: 'end',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 432, top: 481, anchor: 'middle', lineGap: 8,
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
              x: 331, top: 650, anchor: 'end', lineGap: 9,
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 432, top: 583, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+6% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 324, top: 849, anchor: 'end',
              semanticRole: 'reference-offset-side-label',
              lines: [{ text: 'Advertising', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 432, top: 819, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+18% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 345, top: 1012, anchor: 'end',
              semanticRole: 'reference-offset-side-label',
              lines: [{ text: 'Subscription', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 432, top: 965, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+9% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        aws: {
          blocks: [
            {
              x: 432, top: 1103, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+17% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 345, top: 1326, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 432, top: 1272, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+4% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 895, top: 501, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
                { text: '$value', size: 38, weight: 400, color: '#111111' },
                { text: '+9% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1365, top: 341, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '51% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1366, top: 1126, anchor: 'middle', lineGap: 11,
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
              x: 1833, top: 232, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '12% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1833, top: 950, anchor: 'middle', lineGap: 10,
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
              x: 2186, top: 407, anchor: 'middle', lineGap: 8,
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
              x: 2383, top: 283, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2478, top: 498, anchor: 'middle', lineGap: 8,
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
              x: RIGHT_LABEL_X, top: 622, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Fulfillment ($24.6B)', size: 28, weight: 800, color: RED_LABEL },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        technology_content: {
          blocks: [
            {
              x: 2365, top: 807, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
                { text: 'content ($23.0B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2394, top: 1001, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($9.8B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2394, top: 1161, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($2.6B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2359, top: 1313, anchor: 'start',
              lines: [
                { text: 'Other opex ($0.3B)', size: 27, weight: 800, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 57.4, notes: ['+5% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.5, notes: ['+6% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 36.5, notes: ['+6% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 13.9, notes: ['+18% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 11.7, notes: ['+9% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 29.3, notes: ['+17% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.3, notes: ['+4% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 155.7, notes: ['+9% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 78.7, notes: ['51% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 77.0 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 18.4, notes: ['12% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 60.3 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 3.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 17.1, notes: ['11% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.6 },
      { id: 'fulfillment', col: 5, order: 2, type: 'cost', label: 'Fulfillment', value: 24.6, notes: ['16% of revenue', '+0pp Y/Y'] },
      { id: 'technology_content', col: 5, order: 3, type: 'cost', label: 'Technology & content', value: 23.0, notes: ['15% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 9.8, notes: ['6% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.6, notes: ['2% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 0.3 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 57.4, sourceWidth: 122, targetWidth: 124, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.5, sourceWidth: 9, targetWidth: 12, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 36.5, sourceWidth: 77, targetWidth: 79, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 13.9, sourceWidth: 27, targetWidth: 30, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 11.7, sourceWidth: 24, targetWidth: 25, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 29.3, sourceWidth: 61, targetWidth: 63, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, sourceWidth: 1, targetWidth: 3, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 78.7, sourceWidth: 170, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 77.0, sourceWidth: 166, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 18.4, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 60.3, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 12.5, sourceWidth: 29, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.6, sourceWidth: 10, targetWidth: 8, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 3.3, sourceWidth: 5, targetOrder: 1 },
      { source: 'operating_expenses', target: 'fulfillment', value: 24.6, targetWidth: 52, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 23.0, targetWidth: 48, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 9.8, targetWidth: 20, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 2.6, targetWidth: 4, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, targetWidth: 1, targetOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2025 财年第一季度',
        meta: {
          title: 'Amazon 2025 财年第一季度利润表',
        },
        annotationsSvg: annotations(true),
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +5%'] },
          physical_store: { label: '实体商店', notes: ['同比 +6%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +6%'] },
          advertising: { label: '广告', notes: ['同比 +18%'] },
          subscription: { label: '订阅', notes: ['同比 +9%'] },
          aws: { label: 'AWS', notes: ['同比 +17%'] },
          other_revenue: { label: '其他', notes: ['同比 +4%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比 +0 个百分点'] },
          technology_content: { label: '技术与内容', notes: ['占收入 15%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: {
          labels: {
            third_party_seller_services: {
              blocks: [
                {
                  x: 331, top: 660, anchor: 'end', lineGap: 10,
                  semanticRole: 'reference-offset-side-label',
                  lines: [
                    { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                    { text: '服务', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 432, top: 583, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 +6%', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2394, top: 1001, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($9.8B)', size: 29, weight: 800, color: RED_LABEL },
                    { text: '占收入 6%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2394, top: 1161, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($2.6B)', size: 29, weight: 800, color: RED_LABEL },
                    { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
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

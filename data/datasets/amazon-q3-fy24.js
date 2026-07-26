/* ====================================================================
 * Amazon - Q3 FY24 income statement ($B)
 * Reconstructed from input/processed/amazon-q3-fy24.png as a fixed
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

  const annotations = (zh = false) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 702, 287, 0.98)}
      ${icon('amazonDotCom', 101, 417, 0.72)}
      ${icon('amazonPhysicalStores', 96, 562, 0.72)}
      ${icon('amazonAdvertisingCluster', 77, 897, 0.48)}
      ${icon('amazonSubscriptionCluster', 106, 1040, 0.47)}
      ${icon('amazonAws', 205, 1148, 0.46)}

      <g transform="translate(1716 469)">
        <path d="M38 108H248C264 108 273 99 273 83V38C273 24 264 15 248 15H126L104 0L82 15H38C24 15 15 24 15 38V83C15 99 24 108 38 108Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="4"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 40, 30, 0.17)}
          <text x="150" y="58" font-size="33" font-weight="400" fill="${GREEN_LABEL}">$10.4B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <text x="40" y="90" font-size="34" font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="150" y="91" font-size="28" font-weight="400" fill="${GREEN_LABEL}">$7.0B</text>
        </g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q3-fy24',
    name: 'Amazon · Q3 FY24',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q3 FY24 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q3-fy24.png', width: 2667, height: 1500 },
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

    layout: {
      scale: 2.225,
      nodes: {
        online_stores: { x: 395, y: 321, width: 72, height: 136 },
        physical_store: { x: 395, y: 566, width: 72, height: 12 },
        third_party_seller_services: { x: 395, y: 677, width: 72, height: 84 },
        advertising: { x: 395, y: 878, width: 72, height: 34 },
        subscription: { x: 395, y: 1030, width: 72, height: 27 },
        aws: { x: 395, y: 1171, width: 72, height: 62 },
        other_revenue: { x: 395, y: 1338, width: 72, height: 3 },
        revenue: { x: 862, y: 618, width: 74, height: 354 },
        gross_profit: { x: 1330, y: 511, width: 72, height: 175 },
        cost_of_sales: { x: 1330, y: 909, width: 72, height: 180 },
        operating_profit: { x: 1805, y: 418, width: 72, height: 40 },
        operating_expenses: { x: 1805, y: 822, width: 72, height: 135 },
        other_income: { x: 2147, y: 379, width: 72, height: 2 },
        net_profit: { x: 2264, y: 290, width: 74, height: 34 },
        tax: { x: 2264, y: 549, width: 74, height: 7 },
        fulfillment: { x: 2264, y: 657, width: 74, height: 56 },
        technology_content: { x: 2264, y: 838, width: 74, height: 50 },
        sm: { x: 2264, y: 1014, width: 74, height: 25 },
        ga: { x: 2264, y: 1168, width: 74, height: 6 },
        other_opex: { x: 2264, y: 1310, width: 74, height: 1 },
      },
      labels: {
        online_stores: {
          blocks: [
            {
              x: 345, top: 327, anchor: 'end', lineGap: 9, semanticRole: 'brand-cluster-heading',
              lines: [
                { text: 'Online Stores', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 428, top: 238, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+7% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        physical_store: {
          blocks: [
            {
              x: 324, top: 497, anchor: 'end',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 431, top: 490, anchor: 'middle', lineGap: 8,
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
              x: 338, top: 671, anchor: 'end', lineGap: 9,
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 421, top: 602, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+10% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 336, top: 828, anchor: 'end',
              lines: [{ text: 'Advertising', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 419, top: 803, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+19% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 345, top: 990, anchor: 'end', semanticRole: 'brand-cluster-heading',
              lines: [{ text: 'Subscription', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 955, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+11% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        aws: {
          blocks: [
            {
              x: 428, top: 1091, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+19% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 329, top: 1317, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 1253, anchor: 'middle', lineGap: 8,
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
              x: 895, top: 471, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
                { text: '$value', size: 38, weight: 400, color: '#111111' },
                { text: '+11% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1363, top: 329, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '49% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1362, top: 1104, anchor: 'middle', lineGap: 11,
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
              x: 1840, top: 239, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '11% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1841, top: 974, anchor: 'middle', lineGap: 10,
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
              x: 2368, top: 265, anchor: 'start', lineGap: 10,
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
              x: 2477, top: 515, anchor: 'middle', lineGap: 8,
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
              x: RIGHT_LABEL_X, top: 654, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Fulfillment ($24.7B)', size: 28, weight: 800, color: RED_LABEL },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        technology_content: {
          blocks: [
            {
              x: 2366, top: 807, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
                { text: 'content ($22.2B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2386, top: 989, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($10.6B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2394, top: 1139, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($2.7B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2358, top: 1295, anchor: 'start',
              lines: [
                { text: 'Other opex ($0.3B)', size: 27, weight: 800, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nonNodeMetrics: [
      {
        id: 'aws_operating_profit',
        representation: 'annotation',
        label: 'AWS operating profit',
        value: 10.4,
        valueText: '$10.4B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'other_operating_profit',
        representation: 'annotation',
        label: 'Other operating profit',
        value: 7.0,
        valueText: '$7.0B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 61.4, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.2, notes: ['+5% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 37.9, notes: ['+10% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 14.3, notes: ['+19% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 11.3, notes: ['+11% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 27.5, notes: ['+19% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.3, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 158.9, notes: ['+11% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 77.9, notes: ['49% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 81.0, valueText: '($81.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 17.4, notes: ['11% margin', '+3pp Y/Y', 'AWS $10.4B', 'Other $7.0B'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 60.5 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.6, valueText: '$0.6B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 15.3, notes: ['10% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.7 },
      { id: 'fulfillment', col: 5, order: 2, type: 'cost', label: 'Fulfillment', value: 24.7, notes: ['16% of revenue', '(0pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 3, type: 'cost', label: 'Technology & content', value: 22.2, notes: ['14% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 10.6, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.7, notes: ['2% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 0.3 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 61.4, targetOrder: 0, sourceWidth: 136 },
      { source: 'physical_store', target: 'revenue', value: 5.2, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 37.9, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 14.3, targetOrder: 3, sourceWidth: 34 },
      { source: 'subscription', target: 'revenue', value: 11.3, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 27.5, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 77.9, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 81.0, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 17.4, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 60.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 14.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.7, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 0.6, targetOrder: 1 },
      { source: 'operating_expenses', target: 'fulfillment', value: 24.7, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 22.2, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 10.6, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 2.7, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, targetOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2024 财年第三季度',
        meta: {
          title: 'Amazon 2024 财年第三季度利润表',
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他业务营业利润' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +7%'] },
          physical_store: { label: '实体商店', notes: ['同比 +5%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +10%'] },
          advertising: { label: '广告', notes: ['同比 +19%'] },
          subscription: { label: '订阅', notes: ['同比 +11%'] },
          aws: { label: 'AWS', notes: ['同比 +19%'] },
          other_revenue: { label: '其他', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比 (0 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: {
          labels: {
            third_party_seller_services: {
              blocks: [
                {
                  x: 333, top: 672, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                    { text: '服务', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 421, top: 602, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 +10%', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 989, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($10.6B)', size: 29, weight: 800, color: RED_LABEL },
                    { text: '占收入 7%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
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

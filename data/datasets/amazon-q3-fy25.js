/* ====================================================================
 * Amazon - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/amazon-q3-fy25.png as a fixed
 * d3-sankey layout with reusable SVG/text Amazon business annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca7f';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#009a4b';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e08080';
  const NOTE = '#666666';
  const TITLE = '#15527a';
  const RIGHT_LABEL_X = 2354;
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
      <g class="sankey-interactive-annotation" data-node="online_stores">
        <text x="339" y="378" text-anchor="end" font-size="38" font-weight="800" fill="#111111">${zh ? '线上商店' : 'Online Stores'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="advertising">
        <text x="339" y="877" text-anchor="end" font-size="38" font-weight="800" fill="#111111">${zh ? '广告' : 'Advertising'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="subscription">
        <text x="339" y="1024" text-anchor="end" font-size="38" font-weight="800" fill="#111111">${zh ? '订阅' : 'Subscription'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_revenue">
        <text x="339" y="1336" text-anchor="end" font-size="38" font-weight="800" fill="#111111">${zh ? '其他' : 'Other'}</text>
      </g>

      <g transform="translate(1718 527)">
        <path d="M38 108H248C264 108 273 99 273 83V38C273 24 264 15 248 15H126L104 0L82 15H38C24 15 15 24 15 38V83C15 99 24 108 38 108Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="4"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 40, 30, 0.17)}
          <text x="150" y="58" font-size="33" font-weight="400" fill="${GREEN_LABEL}">$11.4B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <text x="40" y="90" font-size="34" font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="150" y="91" font-size="28" font-weight="400" fill="${GREEN_LABEL}">$6.0B</text>
        </g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q3-fy25',
    name: 'Amazon · Q3 FY25',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q3 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q3-fy25.png', width: 2667, height: 1500 },
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
      scale: 1.87,
      nodes: {
        online_stores: { x: 399, y: 330, width: 71, height: 127 },
        physical_store: { x: 399, y: 571, width: 71, height: 10 },
        third_party_seller_services: { x: 399, y: 691, width: 71, height: 79 },
        advertising: { x: 399, y: 891, width: 71, height: 33 },
        subscription: { x: 399, y: 1032, width: 71, height: 24 },
        aws: { x: 399, y: 1161, width: 71, height: 62 },
        other_revenue: { x: 399, y: 1327, width: 71, height: 2 },
        revenue: { x: 866, y: 652, width: 70, height: 337 },
        gross_profit: { x: 1333, y: 548, width: 71, height: 172 },
        cost_of_sales: { x: 1333, y: 924, width: 71, height: 167 },
        operating_profit: { x: 1801, y: 479, width: 70, height: 34 },
        operating_expenses: { x: 1801, y: 804, width: 70, height: 140 },
        other_income: { x: 2163, y: 416, width: 70, height: 19 },
        net_profit: { x: 2267, y: 355, width: 71, height: 41 },
        tax: { x: 2267, y: 583, width: 71, height: 14 },
        technology_content: { x: 2267, y: 711, width: 71, height: 54 },
        fulfillment: { x: 2267, y: 880, width: 71, height: 52 },
        sm: { x: 2267, y: 1055, width: 71, height: 23 },
        ga: { x: 2267, y: 1206, width: 71, height: 6 },
        other_opex: { x: 2267, y: 1329, width: 71, height: 2 },
      },
      labels: {
        online_stores: {
          blocks: [
            {
              x: 434, top: 254, anchor: 'middle', lineGap: 8,
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
              x: 334, top: 510, anchor: 'end',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 434, top: 496, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+7% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        third_party_seller_services: {
          blocks: [
            {
              x: 337, top: 685, anchor: 'end', lineGap: 9,
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 426, top: 615, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+12% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 434, top: 814, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+24% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 434, top: 956, anchor: 'middle', lineGap: 8,
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
              x: 434, top: 1085, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+20% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 434, top: 1251, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+8% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 901, top: 507, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
                { text: '$value', size: 38, weight: 400, color: '#111111' },
                { text: '+13% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1368, top: 366, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '52% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1368, top: 1112, anchor: 'middle', lineGap: 11,
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
              x: 1836, top: 296, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '10% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1836, top: 965, anchor: 'middle', lineGap: 10,
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
              x: 2198, top: 450, anchor: 'middle', lineGap: 8,
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
              x: 2374, top: 324, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '12% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2477, top: 551, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        technology_content: {
          blocks: [
            {
              x: 2366, top: 699, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
                { text: 'content ($29.0B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        fulfillment: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 879, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Fulfillment ($27.7B)', size: 28, weight: 800, color: RED_LABEL },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2387, top: 1042, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($11.7B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2394, top: 1195, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($2.9B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1317, anchor: 'start',
              lines: [{ text: 'Other opex ($2.9B)', size: 27, weight: 800, color: RED_LABEL }],
            },
          ],
        },
      },
    },

    nonNodeMetrics: [
      { id: 'aws_operating_profit', representation: 'annotation', label: 'AWS operating profit', value: 11.4, valueText: '$11.4B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other_operating_profit', representation: 'annotation', label: 'Other operating profit', value: 6.0, valueText: '$6.0B', type: 'profit', labelColor: GREEN_LABEL },
    ],

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 67.4, notes: ['+10% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.6, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 42.5, notes: ['+12% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 17.7, notes: ['+24% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 12.6, notes: ['+11% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 33.0, notes: ['+20% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.4, notes: ['+8% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 180.2, notes: ['+13% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 91.5, notes: ['52% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 88.7 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 17.4, notes: ['10% margin', '+0pp Y/Y', 'AWS $11.4B', 'Other $6.0B'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 74.1 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 10.7, valueText: '$10.7B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 21.2, notes: ['12% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6.9 },
      { id: 'technology_content', col: 5, order: 2, type: 'cost', label: 'Technology & content', value: 29.0, notes: ['16% of revenue', '+2pp Y/Y'] },
      { id: 'fulfillment', col: 5, order: 3, type: 'cost', label: 'Fulfillment', value: 27.7, notes: ['15% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 11.7, notes: ['6% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 2.9 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 67.4, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.6, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 42.5, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 17.7, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 12.6, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 33.0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.4, sourceWidth: 2, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 91.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 88.7, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 17.4, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 74.1, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 10.5, targetWidth: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6.9, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 10.7, sourceWidth: 19, targetWidth: 20, targetOrder: 1 },
      { source: 'operating_expenses', target: 'technology_content', value: 29.0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'fulfillment', value: 27.7, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 11.7, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 2.9, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 2.9, targetWidth: 2, targetOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2025 财年第三季度',
        annotationsSvg: annotations(true),
        meta: {
          title: 'Amazon 2025 财年第三季度利润表',
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +10%'] },
          physical_store: { label: '实体商店', notes: ['同比 +7%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +12%'] },
          advertising: { label: '广告', notes: ['同比 +24%'] },
          subscription: { label: '订阅', notes: ['同比 +11%'] },
          aws: { label: 'AWS', notes: ['同比 +20%'] },
          other_revenue: { label: '其他', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +0 个百分点', 'AWS 业务 $11.4B', '其他业务 $6.0B'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          technology_content: { label: '技术与内容', notes: ['占收入 16%', '同比 +2 个百分点'] },
          fulfillment: { label: '履约', notes: ['占收入 15%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他营业利润' },
        },
        layout: {
          labels: {
            third_party_seller_services: {
              blocks: [
                {
                  x: 340, top: 686, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                    { text: '服务', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 426, top: 612, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 +12%', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1042, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($11.7B)', size: 29, weight: 800, color: RED_LABEL },
                    { text: '占收入 6%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1195, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($2.9B)', size: 29, weight: 800, color: RED_LABEL },
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

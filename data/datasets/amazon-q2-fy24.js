/* ====================================================================
 * Amazon - Q2 FY24 income statement ($B)
 * Reconstructed from input/processed/amazon-q2-fy24.png as a fixed
 * d3-sankey layout with reusable SVG/text Amazon business annotations.
 * ==================================================================== */
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
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 655, 286, 1.15)}
      ${icon('amazonDotCom', 101, 417, 0.72)}
      ${icon('amazonAdvertisingCluster', 77, 897, 0.48)}
      ${icon('amazonSubscriptionCluster', 106, 1040, 0.47)}
      ${icon('amazonAws', 205, 1148, 0.46)}

      <g transform="translate(1707 504)">
        <path d="M20 145C9 145 0 136 0 125V49C0 38 9 29 20 29H90L116 0L142 29H209C220 29 229 38 229 49V125C229 136 220 145 209 145Z"
          fill="#f2f2f2" stroke="#000000" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 24, 37, 0.22)}
          <text x="128" y="68" font-family="Noto Sans,Arial,sans-serif"
            font-size="31" font-weight="400" fill="${GREEN_LABEL}">$9.3B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <text x="24" y="124" font-family="Noto Sans,Arial,sans-serif"
            font-size="31" font-weight="800" fill="#222222">${zh ? '其他' : 'Other'}</text>
          <text x="128" y="124" font-family="Noto Sans,Arial,sans-serif"
            font-size="31" font-weight="400" fill="${GREEN_LABEL}">$5.3B</text>
        </g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q2-fy24',
    name: 'Amazon · Q2 FY24',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q2 FY24 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q2-fy24.png', width: 2667, height: 1500 },
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
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'aws_operating_profit', representation: 'annotation', value: 9.3, type: 'profit' },
      { id: 'other_operating_profit', representation: 'annotation', value: 5.3, type: 'profit' },
    ],

    layout: {
      scale: 2.43,
      nodes: {
        online_stores: { x: 389, y: 349, width: 72, height: 135 },
        physical_store: { x: 389, y: 598, width: 72, height: 13 },
        third_party_seller_services: { x: 389, y: 716, width: 72, height: 87 },
        advertising: { x: 389, y: 911, width: 72, height: 31 },
        subscription: { x: 389, y: 1048, width: 72, height: 26 },
        aws: { x: 389, y: 1175, width: 72, height: 64 },
        other_revenue: { x: 389, y: 1351, width: 72, height: 3 },
        revenue: { x: 856, y: 657, width: 72, height: 360 },
        gross_profit: { x: 1320, y: 564, width: 72, height: 180 },
        cost_of_sales: { x: 1325, y: 936, width: 72, height: 179 },
        operating_profit: { x: 1788, y: 458, width: 72, height: 36 },
        operating_expenses: { x: 1793, y: 847, width: 72, height: 145 },
        other_income: { x: 2146, y: 425, width: 72, height: 2 },
        net_profit: { x: 2257, y: 347, width: 72, height: 33 },
        tax: { x: 2257, y: 594, width: 72, height: 4 },
        fulfillment: { x: 2257, y: 706, width: 72, height: 57 },
        technology_content: { x: 2257, y: 877, width: 72, height: 54 },
        sm: { x: 2257, y: 1052, width: 72, height: 26 },
        ga: { x: 2257, y: 1204, width: 72, height: 7 },
        other_opex: { x: 2257, y: 1343, width: 72, height: 1 },
      },
      labels: {
        online_stores: {
          blocks: [
            {
              x: 345, top: 356, anchor: 'end', lineGap: 9, semanticRole: 'source-group',
              lines: [
                { text: 'Online Store', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 425, top: 271, anchor: 'middle', lineGap: 8,
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
              x: 345, top: 574, anchor: 'end', semanticRole: 'source-group',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 425, top: 520, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+4% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        third_party_seller_services: {
          blocks: [
            {
              x: 338, top: 695, anchor: 'end', lineGap: 9, semanticRole: 'source-group',
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 418, top: 638, anchor: 'middle', lineGap: 8,
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
              x: 337, top: 858, anchor: 'end', semanticRole: 'source-group',
              lines: [{ text: 'Advertising', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 417, top: 833, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+20% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 345, top: 1005, anchor: 'end', semanticRole: 'source-group',
              lines: [{ text: 'Subscription', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 425, top: 970, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+10% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        aws: {
          blocks: [
            {
              x: 425, top: 1097, anchor: 'middle', lineGap: 8,
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
              x: 345, top: 1327, anchor: 'end', semanticRole: 'source-group',
              lines: [{ text: 'Other', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 425, top: 1273, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '(6%) Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 880, top: 509, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
                { text: '$value', size: 38, weight: 400, color: '#111111' },
                { text: '+10% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1357, top: 374, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '50% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1361, top: 1125, anchor: 'middle', lineGap: 11,
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
              x: 1824, top: 272, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '10% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1828, top: 1002, anchor: 'middle', lineGap: 10,
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
              x: 2182, top: 433, anchor: 'middle', lineGap: 8,
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
              x: 2357, top: 316, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '9% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2453, top: 567, anchor: 'middle', lineGap: 8,
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
              x: 2352, top: 708, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Fulfillment ($23.6B)', size: 28, weight: 800, color: RED_LABEL },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        technology_content: {
          blocks: [
            {
              x: 2380, top: 855, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
                { text: 'content ($22.3B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2404, top: 1037, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($10.5B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2411, top: 1180, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($3.0B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2366, top: 1330, anchor: 'start',
              lines: [
                { text: 'Other opex ($0.1B)', size: 27, weight: 800, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Store', value: 55.4, notes: ['+5% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.2, notes: ['+4% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 36.0, valueText: '$36.0B', notes: ['+11% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 12.8, notes: ['+20% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 10.9, notes: ['+10% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 26.3, notes: ['+19% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.3, notes: ['(6%) Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 148.0, valueText: '$148.0B', notes: ['+10% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 74.2, notes: ['50% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 73.7 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 14.7, notes: ['10% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 59.5 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.6, valueText: '$0.6B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 13.5, notes: ['9% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.8 },
      { id: 'fulfillment', col: 5, order: 2, type: 'cost', label: 'Fulfillment', value: 23.6, notes: ['16% of revenue', '+0pp Y/Y'] },
      { id: 'technology_content', col: 5, order: 3, type: 'cost', label: 'Technology & content', value: 22.3, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 10.5, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 3.0, valueText: '$3.0B', notes: ['2% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 0.1 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 55.4, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.2, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 36.0, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 12.8, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 10.9, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 26.3, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 74.2, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 73.7, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 14.7, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 59.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 12.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.8, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 0.6, targetOrder: 1 },
      { source: 'operating_expenses', target: 'fulfillment', value: 23.6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 22.3, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 10.5, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 3.0, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, targetOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Amazon · 2024 财年第二季度',
        meta: {
          title: 'Amazon 2024 财年第二季度利润表',
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他营业利润' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +5%'] },
          physical_store: { label: '实体商店', notes: ['同比 +4%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +11%'] },
          advertising: { label: '广告', notes: ['同比 +20%'] },
          subscription: { label: '订阅', notes: ['同比 +10%'] },
          aws: { label: 'AWS', notes: ['同比 +19%'] },
          other_revenue: { label: '其他', notes: ['同比 (6%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比 +0 个百分点'] },
          technology_content: { label: '技术与内容', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: {
          labels: {
            online_stores: {
              blocks: [
                {
                  x: 345, top: 356, anchor: 'end', lineGap: 9, semanticRole: 'source-group',
                  lines: [
                    { text: '线上商店', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 425, top: 271, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 34, weight: 400, color: '#111111' },
                    { text: '同比 +5%', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            third_party_seller_services: {
              blocks: [
                {
                  x: 338, top: 707, anchor: 'end', lineGap: 10, semanticRole: 'source-group',
                  lines: [
                    { text: '第三方卖家', size: 38, weight: 800, color: '#111111' },
                    { text: '服务', size: 38, weight: 800, color: '#111111' },
                  ],
                },
                {
                  x: 418, top: 638, anchor: 'middle', lineGap: 8,
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
                  x: 2400, top: 1037, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($10.5B)', size: 29, weight: 800, color: RED_LABEL },
                    { text: '占收入 7%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2411, top: 1180, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($3.0B)', size: 29, weight: 800, color: RED_LABEL },
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

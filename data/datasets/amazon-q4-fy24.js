/* Amazon Q4 FY24 income statement ($B), reconstructed from the Source. */
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
  const RIGHT_X = 2353;
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${ICONS[name] || ''}</g>`;
  const line = (text, size, weight = 400, color = '#111111') => ({ text, size, weight, color });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 699, 269, 0.98)}
      <g class="sankey-interactive-annotation" data-node="online_stores">
        <text x="345" y="367" text-anchor="end" font-size="38" font-weight="800" fill="#111111">${zh ? '线上商店' : 'Online Stores'}</text>
      </g>
      ${icon('amazonDotCom', 101, 416, 0.72)}
      ${icon('amazonPhysicalStores', 96, 552, 0.72)}
      ${icon('amazonAdvertisingCluster', 77, 878, 0.48)}
      <g class="sankey-interactive-annotation" data-node="subscription">
        <text x="345" y="1046" text-anchor="end" font-size="38" font-weight="800" fill="#111111">${zh ? '订阅' : 'Subscription'}</text>
      </g>
      ${icon('amazonSubscriptionCluster', 106, 1023, 0.47)}
      ${icon('amazonAws', 205, 1149, 0.46)}
      <g transform="translate(1715 467)">
        <path d="M38 108H248C264 108 273 99 273 83V38C273 24 264 15 248 15H126L104 0L82 15H38C24 15 15 24 15 38V83C15 99 24 108 38 108Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="4"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          ${icon('amazonAws', 40, 30, 0.17)}
          <text x="150" y="58" font-size="33" fill="${GREEN_LABEL}">$10.6B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <text x="40" y="90" font-size="34" font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="150" y="91" font-size="28" fill="${GREEN_LABEL}">$10.6B</text>
        </g>
      </g>
    </g>`;

  const labels = {
    online_stores: {
      blocks: [
        block(428, 233, [line('$value', 34), line('+7% Y/Y', 23, 400, NOTE)]),
      ],
    },
    physical_store: {
      blocks: [
        block(330, 510, [line('Physical Store', 38, 800)], 'end'),
        block(428, 497, [line('$value', 34), line('+8% Y/Y', 23, 400, NOTE)]),
      ],
    },
    third_party_seller_services: {
      blocks: [
        block(345, 702, [line('3rd party', 38, 800), line('sellers services', 38, 800)], 'end', 9),
        block(428, 627, [line('$value', 34), line('+9% Y/Y', 23, 400, NOTE)]),
      ],
    },
    advertising: {
      blocks: [
        block(330, 853, [line('Advertising', 38, 800)], 'end'),
        block(428, 828, [line('$value', 34), line('+18% Y/Y', 23, 400, NOTE)]),
      ],
    },
    subscription: {
      blocks: [
        block(428, 977, [line('$value', 34), line('+10% Y/Y', 23, 400, NOTE)]),
      ],
    },
    aws: {
      blocks: [
        block(428, 1111, [line('$value', 34), line('+19% Y/Y', 23, 400, NOTE)]),
      ],
    },
    other_revenue: {
      blocks: [
        block(337, 1331, [line('Other', 38, 800)], 'end'),
        block(428, 1269, [line('$value', 34), line('+17% Y/Y', 23, 400, NOTE)]),
      ],
    },
    revenue: {
      blocks: [
        block(886, 479, [line('Revenue', 42, 800), line('$value', 38), line('+10% Y/Y', 26, 400, NOTE)], 'middle', 12),
      ],
    },
    gross_profit: {
      blocks: [
        block(1386, 332, [line('Gross profit', 42, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('47% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)], 'middle', 11),
      ],
    },
    cost_of_sales: {
      blocks: [
        block(1365, 1087, [line('Cost of sales', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 'middle', 11),
      ],
    },
    operating_profit: {
      blocks: [
        block(1862, 228, [line('Operating profit', 42, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('11% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)], 'middle', 10),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1856, 942, [line('Operating', 39, 800, RED_LABEL), line('expenses', 39, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 'middle', 10),
      ],
    },
    other_income: {
      blocks: [
        block(2181, 410, [line('Other', 34, 800, GREEN_LABEL), line('$value', 32, 400, GREEN_LABEL)]),
      ],
    },
    net_profit: {
      blocks: [
        block(2383, 279, [line('Net profit', 42, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('11% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)], 'start', 10),
      ],
    },
    tax: {
      blocks: [
        block(2478, 499, [line('Tax', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)]),
      ],
    },
    fulfillment: {
      blocks: [
        block(RIGHT_X, 643, [line('Fulfillment ($28.0B)', 28, 800, RED_LABEL), line('15% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)], 'start'),
      ],
    },
    technology_content: {
      blocks: [
        block(2370, 813, [line('Technology &', 29, 800, RED_LABEL), line('content ($23.8B)', 29, 800, RED_LABEL), line('13% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)], 'start'),
      ],
    },
    sm: {
      blocks: [
        block(2388, 1017, [line('S&M ($13.1B)', 29, 800, RED_LABEL), line('7% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)], 'start'),
      ],
    },
    ga: {
      blocks: [
        block(2388, 1168, [line('G&A ($2.9B)', 29, 800, RED_LABEL), line('2% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)], 'start'),
      ],
    },
    other_opex: {
      blocks: [
        block(RIGHT_X, 1321, [line('Other opex ($0.2B)', 27, 800, RED_LABEL)], 'start'),
      ],
    },
  };

  const dataset = {
    key: 'amazon-q4-fy24',
    name: 'Amazon · Q4 FY24',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q4 FY24 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q4-fy24.png', width: 2667, height: 1500 },
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
      linkTint: { source: ORANGE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1.789,
      nodes: {
        online_stores: { x: 395, y: 316, width: 72, height: 135 },
        physical_store: { x: 395, y: 575, width: 72, height: 7 },
        third_party_seller_services: { x: 395, y: 703, width: 72, height: 84 },
        advertising: { x: 395, y: 909, width: 72, height: 28 },
        subscription: { x: 395, y: 1054, width: 72, height: 18 },
        aws: { x: 395, y: 1186, width: 72, height: 50 },
        other_revenue: { x: 395, y: 1350, width: 72, height: 1 },
        revenue: { x: 863, y: 626, width: 72, height: 336 },
        gross_profit: { x: 1329, y: 513, width: 72, height: 158 },
        cost_of_sales: { x: 1329, y: 890, width: 72, height: 176 },
        operating_profit: { x: 1797, y: 413, width: 72, height: 37 },
        operating_expenses: { x: 1797, y: 799, width: 72, height: 120 },
        other_income: { x: 2146, y: 401, width: 72, height: 2 },
        net_profit: { x: 2264, y: 316, width: 72, height: 33 },
        tax: { x: 2264, y: 523, width: 72, height: 3 },
        fulfillment: { x: 2264, y: 633, width: 72, height: 49 },
        technology_content: { x: 2264, y: 826, width: 72, height: 41 },
        sm: { x: 2264, y: 1017, width: 72, height: 22 },
        ga: { x: 2264, y: 1183, width: 72, height: 3 },
        other_opex: { x: 2264, y: 1334, width: 72, height: 2 },
      },
      labels,
    },
    nonNodeMetrics: [
      { id: 'aws_operating_profit', representation: 'annotation', label: 'AWS operating profit', value: 10.6, valueText: '$10.6B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other_operating_profit', representation: 'annotation', label: 'Other operating profit', value: 10.6, valueText: '$10.6B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 75.6, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.6, notes: ['+8% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 47.5, notes: ['+9% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 17.3, notes: ['+18% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 11.5, notes: ['+10% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 28.8, notes: ['+19% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.6, notes: ['+17% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 187.8, notes: ['+10% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 88.9, notes: ['47% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 98.9 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 21.2, notes: ['11% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 67.7 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 1.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 20.0, valueText: '$20.0B', notes: ['11% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.3 },
      { id: 'fulfillment', col: 5, order: 2, type: 'cost', label: 'Fulfillment', value: 28.0, notes: ['15% of revenue', '(0pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 3, type: 'cost', label: 'Technology & content', value: 23.8, notes: ['13% of revenue', '(0pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 13.1, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 0.2 },
    ],
    links: [
      { source: 'online_stores', target: 'revenue', value: 75.6, sourceWidth: 135, targetWidth: 135, y0: 383.5, y1: 693.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.6, sourceWidth: 7, targetWidth: 10, y0: 578.5, y1: 766, sourceOrder: 0, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 47.5, sourceWidth: 84, targetWidth: 85, y0: 745, y1: 813.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 17.3, sourceWidth: 28, targetWidth: 31, y0: 923, y1: 871.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 11.5, sourceWidth: 18, targetWidth: 21, y0: 1063, y1: 897.5, sourceOrder: 0, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 28.8, sourceWidth: 50, targetWidth: 51, y0: 1211, y1: 933.5, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.6, sourceWidth: 1, targetWidth: 3, y0: 1350.5, y1: 960.5, sourceOrder: 0, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 88.9, sourceWidth: 159, targetWidth: 158, y0: 705.5, y1: 592, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 98.9, sourceWidth: 177, targetWidth: 176, y0: 873.5, y1: 978, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 21.2, sourceWidth: 38, targetWidth: 37, y0: 532, y1: 431.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 67.7, sourceWidth: 120, targetWidth: 120, y0: 611, y1: 859, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 18.9, sourceWidth: 33, targetWidth: 31, y0: 429.5, y1: 331.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.3, sourceWidth: 4, targetWidth: 3, y0: 448, y1: 524.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 1.1, sourceWidth: 2, targetWidth: 2, y0: 402, y1: 348, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'fulfillment', value: 28.0, sourceWidth: 49, targetWidth: 49, y0: 823.5, y1: 657.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 23.8, sourceWidth: 42, targetWidth: 41, y0: 869, y1: 846.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 13.1, sourceWidth: 23, targetWidth: 22, y0: 901.5, y1: 1028, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 2.9, sourceWidth: 5, targetWidth: 3, y0: 915.5, y1: 1184.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 1, targetWidth: 2, y0: 918.5, y1: 1335, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Amazon · 2024 财年第四季度',
        meta: { title: 'Amazon 2024 财年第四季度利润表' },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他业务营业利润' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +7%'] },
          physical_store: { label: '实体商店', notes: ['同比 +8%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +9%'] },
          advertising: { label: '广告', notes: ['同比 +18%'] },
          subscription: { label: '订阅', notes: ['同比 +10%'] },
          aws: { label: 'AWS', notes: ['同比 +19%'] },
          other_revenue: { label: '其他', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 15%', '同比 (0 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 13%', '同比 (0 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: {
          labels: {
            third_party_seller_services: {
              blocks: [
                block(340, 702, [line('第三方卖家', 38, 800), line('服务', 38, 800)], 'end', 10),
                block(428, 627, [line('$value', 34), line('同比 +9%', 23, 400, NOTE)]),
              ],
            },
            sm: {
              blocks: [
                block(RIGHT_X, 1003, [line('销售与市场 ($13.1B)', 29, 800, RED_LABEL), line('占收入 7%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)], 'start'),
              ],
            },
            ga: {
              blocks: [
                block(RIGHT_X, 1168, [line('管理费用 ($2.9B)', 29, 800, RED_LABEL), line('占收入 2%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)], 'start'),
              ],
            },
          },
        },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(dataset);
})();

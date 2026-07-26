/* ====================================================================
 * Amazon - Q4 FY23 income statement ($B)
 * Fixed d3/SVG reconstruction measured from
 * input/processed/amazon-q4-fy23.png.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2354;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });
  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">
      ${BUSINESS_ICONS[name] || ''}
    </g>`;

  const operatingProfitCallout = (zh) => `
    <g>
      <path d="M1731 511H1928C1938 511 1943 518 1943 528V611C1943 621 1938 627 1928 627H1731C1721 627 1716 621 1716 611V528C1716 518 1721 511 1731 511H1806L1830 484L1854 511Z"
        fill="${BACKGROUND}" stroke="#1d1d1d" stroke-width="3"/>
      <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
        ${icon('amazonAws', 1745, 523, 0.16)}
        <text x="1844" y="552" font-family="Montserrat,Arial,sans-serif" font-size="30"
          font-weight="400" fill="${GREEN_LABEL}">$7.2B</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_operating_profit">
        <text x="1738" y="602" font-family="Montserrat,Arial,sans-serif" font-size="31"
          font-weight="800" fill="#333333">${zh ? '其他' : 'Other'}</text>
        <text x="1844" y="602" font-family="Montserrat,Arial,sans-serif" font-size="30"
          font-weight="400" fill="${GREEN_LABEL}">$6.0B</text>
      </g>
    </g>`;

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2202"
      data-link-anchor-y="424">
      <path d="M2141 445H2208C2232 445 2237 386 2264 386"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2178" y="484" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
        font-size="29" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2178" y="524" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
        font-size="29" font-weight="400" fill="${GREEN_LABEL}">$0.5B</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 657, 292, 0.98)}
      ${icon('amazonDotCom', 111, 454, 0.72)}
      ${icon('amazonAdvertisingCluster', 111, 934, 0.48)}
      ${icon('amazonSubscriptionCluster', 111, 1077, 0.47)}
      ${icon('amazonAws', 206, 1200, 0.46)}
      ${operatingProfitCallout(zh)}
      ${otherIncomeGuide(zh)}
    </g>`;

  const labels = (zh) => ({
    other_income: { blocks: [] },
    online_stores: {
      blocks: [
        block(350, 414, [line(zh ? '线上商店' : 'Online Store', 38, { weight: 800 })], { anchor: 'end', semanticRole: 'brand-heading' }),
        block(431, 313, [line('$value', 34), line(zh ? '同比 +9%' : '+9% Y/Y', 23, { color: NOTE })]),
      ],
    },
    physical_store: {
      blocks: [
        block(350, 633, [line(zh ? '实体商店' : 'Physical Store', 38, { weight: 800 })], { anchor: 'end' }),
        block(431, 572, [line('$value', 34), line(zh ? '同比 +4%' : '+4% Y/Y', 23, { color: NOTE })]),
      ],
    },
    third_party_seller_services: {
      blocks: [
        block(
          350,
          765,
          zh
            ? [line('第三方卖家', 38, { weight: 800 }), line('服务', 38, { weight: 800 })]
            : [line('3rd party', 38, { weight: 800 }), line('sellers services', 38, { weight: 800 })],
          { anchor: 'end', lineGap: 9 }
        ),
        block(431, 691, [line('$value', 34), line(zh ? '同比 +20%' : '+20% Y/Y', 23, { color: NOTE })]),
      ],
    },
    advertising: {
      blocks: [
        block(350, 898, [line(zh ? '广告' : 'Advertising', 38, { weight: 800 })], { anchor: 'end' }),
        block(431, 892, [line('$value', 34), line(zh ? '同比 +27%' : '+27% Y/Y', 23, { color: NOTE })]),
      ],
    },
    subscription: {
      blocks: [
        block(350, 1045, [line(zh ? '订阅' : 'Subscription', 38, { weight: 800 })], { anchor: 'end' }),
        block(431, 1033, [line('$value', 34), line(zh ? '同比 +14%' : '+14% Y/Y', 23, { color: NOTE })]),
      ],
    },
    aws: {
      blocks: [
        block(431, 1153, [line('$value', 34), line(zh ? '同比 +13%' : '+13% Y/Y', 23, { color: NOTE })]),
      ],
    },
    other_revenue: {
      blocks: [
        block(350, 1350, [line(zh ? '其他' : 'Other', 38, { weight: 800 })], { anchor: 'end' }),
        block(431, 1298, [line('$value', 34), line(zh ? '同比 (3%)' : '(3%) Y/Y', 23, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [
        block(894, 502, [
          line(zh ? '收入' : 'Revenue', 42, { weight: 800 }),
          line('$value', 38),
          line(zh ? '同比 +14%' : '+14% Y/Y', 27, { color: NOTE }),
        ], { lineGap: 11 }),
      ],
    },
    gross_profit: {
      blocks: [
        block(1363, 359, [
          line(zh ? '毛利润' : 'Gross profit', 42, { weight: 800, color: GREEN_LABEL }),
          line('$value', 38, { color: GREEN_LABEL }),
          line(zh ? '利润率 46%' : '46% margin', 28, { color: NOTE }),
          line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    cost_of_sales: {
      blocks: [
        block(1363, 1118, [
          line(zh ? '销售成本' : 'Cost of sales', 38, { weight: 800, color: RED_LABEL }),
          line('$value', 37, { color: RED_LABEL }),
        ], { lineGap: 10 }),
      ],
    },
    operating_profit: {
      blocks: [
        block(1832, 254, [
          line(zh ? '营业利润' : 'Operating profit', 42, { weight: 800, color: GREEN_LABEL }),
          line('$value', 38, { color: GREEN_LABEL }),
          line(zh ? '利润率 8%' : '8% margin', 28, { color: NOTE }),
          line(zh ? '同比 +2 个百分点' : '+2pp Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1831, 1050, [
          line(zh ? '运营费用' : 'Operating', 39, { weight: 800, color: RED_LABEL }),
          ...(zh ? [] : [line('expenses', 39, { weight: 800, color: RED_LABEL })]),
          line('$value', 37, { color: RED_LABEL }),
        ], { lineGap: 10 }),
      ],
    },
    net_profit: {
      blocks: [
        block(2360, 326, [
          line(zh ? '净利润' : 'Net profit', 42, { weight: 800, color: GREEN_LABEL }),
          line('$value', 38, { color: GREEN_LABEL }),
          line(zh ? '利润率 6%' : '6% margin', 28, { color: NOTE }),
          line(zh ? '同比 +7 个百分点' : '+7pp Y/Y', 28, { color: NOTE }),
        ], { anchor: 'start', lineGap: 10 }),
      ],
    },
    tax: {
      blocks: [
        block(2456, 536, [
          line(zh ? '税费' : 'Tax', 30, { weight: 800, color: RED_LABEL }),
          line('$value', 30, { color: RED_LABEL }),
        ], { lineGap: 8 }),
      ],
    },
    fulfillment: {
      blocks: [
        block(RIGHT_LABEL_X, 706, [
          line(zh ? '履约 ($26.1B)' : 'Fulfillment ($26.1B)', 28, { weight: 800, color: RED_LABEL }),
          line(zh ? '占收入 15%' : '15% of revenue', 28, { color: NOTE }),
          line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 28, { color: NOTE }),
        ], { anchor: 'start', lineGap: 8 }),
      ],
    },
    technology_content: {
      blocks: [
        block(RIGHT_LABEL_X, 856, [
          ...(zh
            ? [line('技术与内容 ($22.0B)', 29, { weight: 800, color: RED_LABEL })]
            : [
                line('Technology &', 29, { weight: 800, color: RED_LABEL }),
                line('content ($22.0B)', 29, { weight: 800, color: RED_LABEL }),
              ]),
          line(zh ? '占收入 13%' : '13% of revenue', 28, { color: NOTE }),
          line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 28, { color: NOTE }),
        ], { anchor: 'start', lineGap: 8 }),
      ],
    },
    sm: {
      blocks: [
        block(RIGHT_LABEL_X, 1042, [
          line(zh ? '销售与市场 ($12.9B)' : 'S&M ($12.9B)', 29, { weight: 800, color: RED_LABEL }),
          line(zh ? '占收入 8%' : '8% of revenue', 28, { color: NOTE }),
          line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 28, { color: NOTE }),
        ], { anchor: 'start', lineGap: 8 }),
      ],
    },
    ga: {
      blocks: [
        block(RIGHT_LABEL_X, 1191, [
          line(zh ? '管理费用 ($3.0B)' : 'G&A ($3.0B)', 29, { weight: 800, color: RED_LABEL }),
          line(zh ? '占收入 2%' : '2% of revenue', 28, { color: NOTE }),
          line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 28, { color: NOTE }),
        ], { anchor: 'start', lineGap: 8 }),
      ],
    },
    other_opex: {
      blocks: [
        block(RIGHT_LABEL_X, 1332, [
          line(zh ? '其他运营费用 ($0.2B)' : 'Other opex ($0.2B)', 27, { weight: 800, color: RED_LABEL }),
        ], { anchor: 'start' }),
      ],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q4-fy23',
    name: 'Amazon · Q4 FY23',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2245,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: '#111111' },
        hub: { node: ORANGE, label: '#111111' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      routes: {
        other_income: { x: 2141, y: 445, width: 0, height: 1 },
      },
      nodes: {
        online_stores: { x: 396, y: 390, width: 71, height: 149 },
        physical_store: { x: 398, y: 649, width: 71, height: 8 },
        third_party_seller_services: { x: 396, y: 768, width: 71, height: 91 },
        advertising: { x: 396, y: 969, width: 71, height: 29 },
        subscription: { x: 396, y: 1110, width: 71, height: 20 },
        aws: { x: 396, y: 1230, width: 71, height: 50 },
        other_revenue: { x: 396, y: 1375, width: 71, height: 1 },
        revenue: { x: 858, y: 644, width: 70, height: 362 },
        gross_profit: { x: 1327, y: 539, width: 72, height: 163 },
        cost_of_sales: { x: 1327, y: 899, width: 72, height: 196 },
        operating_profit: { x: 1798, y: 440, width: 70, height: 25 },
        operating_expenses: { x: 1795, y: 891, width: 70, height: 135 },
        net_profit: { x: 2264, y: 365, width: 71, height: 21 },
        tax: { x: 2264, y: 569, width: 71, height: 3 },
        fulfillment: { x: 2264, y: 699, width: 71, height: 54 },
        technology_content: { x: 2264, y: 866, width: 71, height: 45 },
        sm: { x: 2264, y: 1050, width: 71, height: 25 },
        ga: { x: 2264, y: 1218, width: 71, height: 4 },
        other_opex: { x: 2264, y: 1346, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.5, valueText: '$0.5B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'aws_operating_profit', representation: 'annotation', label: 'AWS operating profit', value: 7.2, valueText: '$7.2B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other_operating_profit', representation: 'annotation', label: 'Other operating profit', value: 6.0, valueText: '$6.0B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'online_stores', type: 'source', label: 'Online Store', value: 70.5, notes: ['+9% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', type: 'source', label: 'Physical Store', value: 5.2, notes: ['+4% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', type: 'source', label: '3rd party sellers services', value: 43.6, notes: ['+20% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', type: 'source', label: 'Advertising', value: 14.7, notes: ['+27% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', type: 'source', label: 'Subscription', value: 10.5, notes: ['+14% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', type: 'source', label: 'AWS', value: 24.2, notes: ['+13% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', type: 'source', label: 'Other', value: 1.4, notes: ['(3%) Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 170.0, valueText: '$170.0B', notes: ['+14% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 77.4, notes: ['46% margin', '+3pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', type: 'cost', label: 'Cost of sales', value: 92.6, color: RED, linkTint: RED_LINK },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 13.2, notes: ['8% margin', '+2pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', type: 'cost', label: 'Operating expenses', value: 64.2, color: RED, linkTint: RED_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 10.6, notes: ['6% margin', '+7pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'tax', type: 'cost', label: 'Tax', value: 3.1, color: RED, linkTint: RED_LINK },
      { id: 'fulfillment', type: 'cost', label: 'Fulfillment', value: 26.1, notes: ['15% of revenue', '(0pp) Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'technology_content', type: 'cost', label: 'Technology & content', value: 22.0, valueText: '($22.0B)', notes: ['13% of revenue', '(1pp) Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'sm', type: 'cost', label: 'S&M', value: 12.9, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'ga', type: 'cost', label: 'G&A', value: 3.0, valueText: '($3.0B)', notes: ['2% of revenue', '(1pp) Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.2, color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'online_stores', target: 'revenue', value: 70.5, sourceWidth: 149, targetWidth: 150, y0: 464.5, y1: 719, sourceOrder: 0, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.2, sourceWidth: 8, targetWidth: 11, y0: 653, y1: 799.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 43.6, sourceWidth: 91, targetWidth: 93, y0: 813.5, y1: 851.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 14.7, sourceWidth: 29, targetWidth: 31, y0: 983.5, y1: 913.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 10.5, sourceWidth: 20, targetWidth: 22, y0: 1120, y1: 940, sourceOrder: 0, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 24.2, sourceWidth: 50, targetWidth: 52, y0: 1255, y1: 977, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.4, sourceWidth: 1, targetWidth: 3, y0: 1375.5, y1: 1004.5, sourceOrder: 0, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 77.4, sourceWidth: 165, targetWidth: 163, y0: 726.5, y1: 620.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 92.6, sourceWidth: 197, targetWidth: 196, y0: 907.5, y1: 997, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 13.2, sourceWidth: 28, targetWidth: 25, y0: 553, y1: 452.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 64.2, sourceWidth: 135, targetWidth: 135, y0: 634.5, y1: 958.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 10.1, sourceWidth: 19, targetWidth: 20, y0: 449.5, y1: 375, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 3.1, sourceWidth: 6, targetWidth: 3, y0: 462, y1: 570.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.5, sourceWidth: 2, targetWidth: 1, y0: 445, y1: 385.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'fulfillment', value: 26.1, sourceWidth: 55, targetWidth: 54, y0: 918.5, y1: 726, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_content', value: 22.0, sourceWidth: 46, targetWidth: 45, y0: 969, y1: 888.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 12.9, sourceWidth: 27, targetWidth: 25, y0: 1005.5, y1: 1062.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 3.0, sourceWidth: 6, targetWidth: 4, y0: 1022, y1: 1220, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 1, targetWidth: 2, y0: 1025.5, y1: 1347, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Amazon · 2023 财年第四季度',
        meta: {
          title: 'Amazon 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          other_income: { label: '其他' },
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他业务营业利润' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +9%'] },
          physical_store: { label: '实体商店', notes: ['同比 +4%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +20%'] },
          advertising: { label: '广告', notes: ['同比 +27%'] },
          subscription: { label: '订阅', notes: ['同比 +14%'] },
          aws: { label: 'AWS', notes: ['同比 +13%'] },
          other_revenue: { label: '其他', notes: ['同比 (3%)'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +3 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约', notes: ['占收入 15%', '同比 (0 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 13%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

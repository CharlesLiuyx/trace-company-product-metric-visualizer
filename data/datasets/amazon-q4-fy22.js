/* Amazon Q4 FY22 income statement ($B), measured from the Source reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    ...(options.color ? { color: options.color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });
  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">
      ${BUSINESS_ICONS[name] || ''}
    </g>`;

  function annotations(zh) {
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        ${icon('amazonCompanyWordmark', 655, 294, 0.98)}
        ${icon('amazonDotCom', 108, 480, 0.72)}
        ${icon('amazonSubscriptionCluster', 107, 927, 0.50)}
        ${icon('amazonAdvertisingCluster', 118, 1056, 0.53)}
        ${icon('amazonAws', 207, 1185, 0.43)}

        <g data-annotation-clearance="operating-profit-breakdown">
          <path d="M1743 638H1927C1941 638 1949 630 1949 616V543C1949 530 1941 521 1927 521H1861L1836 493L1811 521H1743C1729 521 1721 530 1721 543V616C1721 630 1729 638 1743 638Z"
            fill="${BG}" stroke="#1d1d1d" stroke-width="3"/>
          <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
            ${icon('amazonAws', 1748, 530, 0.17)}
            <text x="1846" y="561" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$5.2B</text>
          </g>
          <g class="sankey-interactive-annotation" data-node="other_operating_result">
            <text x="1734" y="618" font-size="31" font-weight="800" fill="#222222">${zh ? '其他' : 'Other'}</text>
            <text x="${zh ? 1842 : 1840}" y="618" font-size="29" font-weight="400" fill="${RED_LABEL}">($2.5B)</text>
          </g>
        </g>
      </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      online: '线上商店',
      physical: '实体商店',
      third: ['第三方卖家', '服务'],
      subscription: '订阅',
      advertising: '广告',
      other: '其他',
      revenue: '收入',
      gross: '毛利润',
      cost: ['收入', '成本'],
      operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'],
      netLoss: ['税前', '净亏损'],
      interest: '利息',
      fulfillment: '履约',
      technology: ['技术与', '内容'],
      sm: '销售与市场',
      ga: '管理费用',
      otherOpex: '其他运营费用',
      yoy2Down: '同比 (2%)',
      yoy6: '同比 +6%',
      yoy20: '同比 +20%',
      yoy13: '同比 +13%',
      yoy19: '同比 +19%',
      yoy76Down: '同比 (76%)',
      yoy9: '同比 +9%',
      margin43: '利润率 43%',
      pp3: '同比 +3 个百分点',
      margin2: '利润率 2%',
      pp2Down: '同比 (2 个百分点)',
      revenue15: '占收入 15%',
      pp1Down: '同比 (1 个百分点)',
      revenue14: '占收入 14%',
      revenue9: '占收入 9%',
      pp1: '同比 +1 个百分点',
      revenue2: '占收入 2%',
      unchanged: '保持不变',
    } : {
      online: 'Online Store',
      physical: 'Physical Store',
      third: ['3rd party', 'sellers services'],
      subscription: 'Subscription',
      advertising: 'Advertising',
      other: 'Other',
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'],
      netLoss: ['Net loss', 'before tax'],
      interest: 'Interest',
      fulfillment: 'Fulfillment',
      technology: ['Technology &', 'content'],
      sm: 'S&M',
      ga: 'G&A',
      otherOpex: 'Other opex',
      yoy2Down: '(2%) Y/Y',
      yoy6: '+6% Y/Y',
      yoy20: '+20% Y/Y',
      yoy13: '+13% Y/Y',
      yoy19: '+19% Y/Y',
      yoy76Down: '(76%) Y/Y',
      yoy9: '+9% Y/Y',
      margin43: '43% margin',
      pp3: '+3pp Y/Y',
      margin2: '2% margin',
      pp2Down: '(2pp) Y/Y',
      revenue15: '15% of revenue',
      pp1Down: '(1pp) Y/Y',
      revenue14: '14% of revenue',
      revenue9: '9% of revenue',
      pp1: '+1pp Y/Y',
      revenue2: '2% of revenue',
      unchanged: 'Unchanged',
    };
    const name = (text, size = 38, color = '#111111') =>
      line(text, size, { weight: 800, color });
    const value = (size = 34, color = '#111111') => line('$value', size, { color });
    const note = (text, size = 25) => line(text, size, { color: NOTE });

    return {
      online_stores: { blocks: [
        block(424, 302, [value(), note(t.yoy2Down, 23)]),
        block(339, 413, [name(t.online)], { anchor: 'end', semanticRole: 'source-group-label' }),
      ] },
      physical_store: { blocks: [
        block(430.5, 549, [value(), note(t.yoy6, 23)]),
        block(339, 615, [name(t.physical)], { anchor: 'end', semanticRole: 'source-group-label' }),
      ] },
      third_party_seller_services: { blocks: [
        block(418.5, 655, [value(), note(t.yoy20, 23)]),
        block(333.5, zh ? 741 : 729, t.third.map((text) => name(text)), { anchor: 'end', lineGap: 9, semanticRole: 'source-group-label' }),
      ] },
      subscription: { blocks: [
        block(420.5, 846, [value(), note(t.yoy13, 23)]),
        block(335.5, 886, [name(t.subscription)], { anchor: 'end', semanticRole: 'source-group-label' }),
      ] },
      advertising: { blocks: [
        block(418, 967, [value(), note(t.yoy19, 23)]),
        block(333, 1017, [name(t.advertising)], { anchor: 'end', semanticRole: 'source-group-label' }),
      ] },
      aws: { blocks: [
        block(425.5, 1123, [value(), note(t.yoy20, 23)]),
      ] },
      other_revenue: { blocks: [
        block(430.5, 1282, [value(), note(t.yoy76Down, 23)]),
        block(334, 1337, [name(t.other)], { anchor: 'end', semanticRole: 'source-group-label' }),
      ] },
      revenue: { blocks: [
        block(897, 487, [name(t.revenue, 42), value(38), note(t.yoy9, 27)], { lineGap: 11 }),
      ] },
      gross_profit: { blocks: [
        block(1367, 343, [name(t.gross, 42, GREEN_LABEL), value(38, GREEN_LABEL), note(t.margin43, 28), note(t.pp3, zh ? 26 : 28)], { lineGap: 10 }),
      ] },
      cost_of_revenue: { blocks: [
        block(1361.5, zh ? 1115 : 1092, [...t.cost.map((text) => name(text, 39, RED_LABEL)), value(37, RED_LABEL)], { lineGap: 10 }),
      ] },
      operating_profit: { blocks: [
        block(1839, 284, [name(t.operatingProfit, 42, GREEN_LABEL), value(38, GREEN_LABEL), note(t.margin2, 28), note(t.pp2Down, zh ? 26 : 28)], { lineGap: 10 }),
      ] },
      operating_expenses: { blocks: [
        block(1830.5, zh ? 1053 : 1034, [...t.operatingExpenses.map((text) => name(text, 39, RED_LABEL)), value(37, RED_LABEL)], { lineGap: 10 }),
      ] },
      net_loss_before_tax: { blocks: [
        block(2182, 340, [...t.netLoss.map((text) => name(text, 39, RED_LABEL)), value(37, RED_LABEL)], { lineGap: 10 }),
      ] },
      other_non_operating: { blocks: [
        block(2450, 529, [name(t.other, 31, RED_LABEL), value(30, RED_LABEL)], { lineGap: 8 }),
      ] },
      interest: { blocks: [
        block(2444, 635, [name(t.interest, 30, RED_LABEL), value(30, RED_LABEL)], { lineGap: 8 }),
      ] },
      fulfillment: { blocks: [
        block(2345, 773, [
          line(`${t.fulfillment} ($23.1B)`, 29, { weight: 800, color: RED_LABEL }),
          note(t.revenue15, 28),
          note(t.pp1Down, zh ? 26 : 28),
        ], { anchor: 'start', lineGap: 8 }),
      ] },
      technology_content: { blocks: [
        block(2361, 912, [
          ...t.technology.map((text, index) => line(`${text}${index === t.technology.length - 1 ? ' ($20.8B)' : ''}`, 29, { weight: 800, color: RED_LABEL })),
          note(t.revenue14, 28),
          note(t.pp3, zh ? 26 : 28),
        ], { anchor: 'start', lineGap: 8 }),
      ] },
      sm: { blocks: [
        block(2390, 1085, [
          line(`${t.sm} ($12.8B)`, zh ? 28 : 29, { weight: 800, color: RED_LABEL }),
          note(t.revenue9, 28),
          note(t.pp1, zh ? 26 : 28),
        ], { anchor: 'start', lineGap: 8 }),
      ] },
      ga: { blocks: [
        block(2396, 1217, [
          line(`${t.ga} ($3.3B)`, zh ? 28 : 29, { weight: 800, color: RED_LABEL }),
          note(t.revenue2, 28),
          note(t.unchanged, 28),
        ], { anchor: 'start', lineGap: 8 }),
      ] },
      other_opex: { blocks: [
        block(2339.5, 1344, [
          line(`${t.otherOpex} ($0.8B)`, zh ? 27 : 29, { weight: 800, color: RED_LABEL }),
        ], { anchor: 'start' }),
      ] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q4-fy22',
    name: 'Amazon · Q4 FY22',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q4FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2245,
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
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      {
        id: 'aws_operating_profit',
        representation: 'annotation',
        label: 'AWS operating profit',
        value: 5.2,
        valueText: '$5.2B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
      {
        id: 'other_operating_result',
        representation: 'annotation',
        label: 'Other',
        value: -2.5,
        valueText: '($2.5B)',
        type: 'cost',
        labelColor: RED_LABEL,
      },
    ],
    layout: {
      scale: 2.43,
      nodes: {
        online_stores: { x: 395, y: 377, width: 71, height: 157 },
        physical_store: { x: 395, y: 625, width: 71, height: 12 },
        third_party_seller_services: { x: 395, y: 730, width: 71, height: 88 },
        subscription: { x: 395, y: 922, width: 71, height: 22 },
        advertising: { x: 395, y: 1043, width: 71, height: 28 },
        aws: { x: 395, y: 1198, width: 71, height: 52 },
        other_revenue: { x: 395, y: 1358, width: 71, height: 3 },
        revenue: { x: 862, y: 629, width: 70, height: 363 },
        gross_profit: { x: 1331, y: 529, width: 72, height: 155 },
        cost_of_revenue: { x: 1334, y: 864, width: 71, height: 208 },
        operating_profit: { x: 1804, y: 469, width: 70, height: 7 },
        operating_expenses: { x: 1807, y: 864, width: 70, height: 148 },
        net_loss_before_tax: { x: 2147, y: 490, width: 70, height: 3 },
        other_non_operating: { x: 2263, y: 551, width: 71, height: 9 },
        interest: { x: 2263, y: 664, width: 71, height: 2 },
        fulfillment: { x: 2263, y: 772, width: 71, height: 56 },
        technology_content: { x: 2263, y: 925, width: 71, height: 51 },
        sm: { x: 2263, y: 1088, width: 71, height: 31 },
        ga: { x: 2263, y: 1226, width: 71, height: 8 },
        other_opex: { x: 2263, y: 1351, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Store', value: 64.5, notes: ['(2%) Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.0, valueText: '$5.0B', notes: ['+6% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 36.3, notes: ['+20% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 3, type: 'source', label: 'Subscription', value: 9.2, notes: ['+13% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 4, type: 'source', label: 'Advertising', value: 11.6, notes: ['+19% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 21.4, notes: ['+20% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.3, notes: ['(76%) Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 149.2, notes: ['+9% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 63.6, notes: ['43% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 85.6, valueText: '($85.6B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, notes: ['2% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 60.8, valueText: '($60.8B)' },
      { id: 'net_loss_before_tax', col: 4, order: 0, type: 'cost', label: 'Net loss before tax', value: -1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating', col: 5, order: 0, type: 'cost', label: 'Other', value: 3.5, valueText: '($3.5B)' },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.2, valueText: '($0.2B)' },
      { id: 'fulfillment', col: 5, order: 2, type: 'cost', label: 'Fulfillment', value: 23.1, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 3, type: 'cost', label: 'Technology & content', value: 20.8, notes: ['14% of revenue', '+3pp Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 12.8, notes: ['9% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 3.3, notes: ['2% of revenue', 'Unchanged'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 0.8 },
    ],
    links: [
      { source: 'online_stores', target: 'revenue', value: 64.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.0, sourceOrder: 0, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 36.3, sourceOrder: 0, targetOrder: 2 },
      { source: 'subscription', target: 'revenue', value: 9.2, sourceOrder: 0, targetOrder: 3 },
      { source: 'advertising', target: 'revenue', value: 11.6, sourceOrder: 0, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 21.4, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, sourceOrder: 0, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 63.6, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 85.6, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 60.8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 2.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss_before_tax', target: 'other_non_operating', value: 1.0, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fulfillment', value: 23.1, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_content', value: 20.8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 12.8, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 3.3, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.8, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Amazon · 2022 财年第四季度',
        meta: {
          title: 'Amazon 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          titleSize: 112,
          titleTextLength: 1740,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_result: { label: '其他' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 (2%)'] },
          physical_store: { label: '实体商店', notes: ['同比 +6%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +20%'] },
          subscription: { label: '订阅', notes: ['同比 +13%'] },
          advertising: { label: '广告', notes: ['同比 +19%'] },
          aws: { label: 'AWS', notes: ['同比 +20%'] },
          other_revenue: { label: '其他', notes: ['同比 (76%)'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_loss_before_tax: { label: '税前净亏损' },
          other_non_operating: { label: '其他' },
          interest: { label: '利息' },
          fulfillment: { label: '履约', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 14%', '同比 +3 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 9%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '保持不变'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

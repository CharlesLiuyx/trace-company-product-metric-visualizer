/* Amazon — Q2 FY25 income statement ($B), measured fixed-layout d3/SVG. */
(function () {
  const BG = '#f2f2f2';
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#15527a';
  const RIGHT_X = 2380;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, options = {}) => ({
    text, size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x, top,
    anchor: options.anchor || 'middle',
    semanticRole: options.semanticRole || '',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });
  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})"
      data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 702, 287, 0.98)}
      ${icon('amazonDotCom', 101, 417, 0.72)}
      ${icon('amazonPhysicalStores', 96, 562, 0.72)}
      ${icon('amazonAdvertisingCluster', 77, 897, 0.48)}
      ${icon('amazonSubscriptionCluster', 106, 1040, 0.47)}
      ${icon('amazonAws', 205, 1148, 0.46)}
      <g transform="translate(1718 488)">
        <path d="M20 29H102L116 0L142 29H211Q229 29 229 47V128Q229 146 211 146H20Q0 146 0 128V47Q0 29 20 29Z"
          fill="${BG}" stroke="#1d1d1d" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          <rect x="18" y="36" width="198" height="47" fill="transparent"/>
          ${icon('amazonAws', 24, 41, 0.17)}
          <text x="118" y="68" font-size="32" fill="${GREEN_LABEL}">$10.2B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <rect x="18" y="85" width="198" height="48" fill="transparent"/>
          <text x="24" y="126" font-size="31" font-weight="800"
            fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="128" y="126" font-size="28" fill="${GREEN_LABEL}">$9.0B</text>
        </g>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      online: '线上商店', physical: '实体商店', third: ['第三方卖家', '服务'],
      advertising: '广告', subscription: '订阅', other: '其他', revenue: '收入',
      gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['运营', '费用'],
      net: '净利润', tax: '税费', technology: ['技术与内容 ($27.2B)'],
      fulfillment: ['履约 ($26.0B)'], sm: ['销售与市场 ($11.4B)'], ga: ['管理费用 ($3.0B)'],
      otherOpex: ['其他运营费用 ($0.2B)'],
      yoy11: '同比 +11%', yoy7: '同比 +7%', yoy12: '同比 +12%', yoy23: '同比 +23%',
      yoy17: '同比 +17%', yoy19: '同比 +19%', yoy13: '同比 +13%',
      margin52: '利润率 52%', margin11: '利润率 11%',
      pp2: '同比 +2 个百分点', pp1: '同比 +1 个百分点', pp0: '同比 (0 个百分点)',
      share16: '占收入 16%', share15: '占收入 15%', share7: '占收入 7%', share2: '占收入 2%',
    } : {
      online: 'Online Stores', physical: 'Physical Store', third: ['3rd party', 'sellers services'],
      advertising: 'Advertising', subscription: 'Subscription', other: 'Other', revenue: 'Revenue',
      gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax',
      technology: ['Technology &', 'content ($27.2B)'], fulfillment: ['Fulfillment ($26.0B)'],
      sm: ['S&M ($11.4B)'], ga: ['G&A ($3.0B)'], otherOpex: ['Other opex ($0.2B)'],
      yoy11: '+11% Y/Y', yoy7: '+7% Y/Y', yoy12: '+12% Y/Y', yoy23: '+23% Y/Y',
      yoy17: '+17% Y/Y', yoy19: '+19% Y/Y', yoy13: '+13% Y/Y',
      margin52: '52% margin', margin11: '11% margin',
      pp2: '+2pp Y/Y', pp1: '+1pp Y/Y', pp0: '(0pp) Y/Y',
      share16: '16% of revenue', share15: '15% of revenue',
      share7: '7% of revenue', share2: '2% of revenue',
    };
    const sourceName = (text, top, x = 345) => block(x, top,
      (Array.isArray(text) ? text : [text]).map((item) =>
        line(item, 38, { weight: 800, color: '#111111' })),
      { anchor: 'end', lineGap: 9, semanticRole: 'source-reference-name' });
    const sourceValue = (top, note, x = 433) => block(x, top, [
      line('$value', 34, { color: '#111111' }),
      line(note, 23, { color: NOTE }),
    ]);
    const rightExpense = (names, top, share, x = RIGHT_X) => block(x, top, [
      ...names.map((item) => line(item, 29, { weight: 800, color: RED_LABEL })),
      line(share, 28, { color: NOTE }),
      line(t.pp0, 28, { color: NOTE }),
    ], { anchor: 'start' });
    return {
      online_stores: { blocks: [sourceName(t.online, 311, 338), sourceValue(224, t.yoy11, 426)] },
      physical_store: { blocks: [sourceName(t.physical, 489, 326), sourceValue(473, t.yoy7, 434)] },
      third_party_seller_services: { blocks: [sourceName(t.third, 665, 338), sourceValue(596, t.yoy12, 426)] },
      advertising: { blocks: [sourceName(t.advertising, 827, 335), sourceValue(798, t.yoy23, 423)] },
      subscription: { blocks: [sourceName(t.subscription, 987, 341), sourceValue(947, t.yoy12, 429)] },
      aws: { blocks: [sourceValue(1082, t.yoy17, 435)] },
      other_revenue: { blocks: [sourceName(t.other, 1306, 339), sourceValue(1245, t.yoy19, 434)] },
      revenue: { blocks: [block(900, 501, [
        line(t.revenue, 42, { weight: 800, color: '#111111' }),
        line('$value', 38, { color: '#111111' }), line(t.yoy13, 26, { color: NOTE }),
      ], { lineGap: 12 })] },
      gross_profit: { blocks: [block(1367, 351, [
        line(t.gross, 42, { weight: 800, color: GREEN_LABEL }),
        line('$value', 38, { color: GREEN_LABEL }), line(t.margin52, 28, { color: NOTE }),
        line(t.pp2, 28, { color: NOTE }),
      ], { lineGap: 11 })] },
      cost_of_sales: { blocks: [block(1367, 1096, [
        line(t.cost, 38, { weight: 800, color: RED_LABEL }),
        line('$value', 37, { color: RED_LABEL }),
      ], { lineGap: 11 })] },
      operating_profit: { blocks: [block(1835, 255, [
        line(t.operating, 42, { weight: 800, color: GREEN_LABEL }),
        line('$value', 38, { color: GREEN_LABEL }), line(t.margin11, 28, { color: NOTE }),
        line(t.pp1, 28, { color: NOTE }),
      ], { lineGap: 10 })] },
      operating_expenses: { blocks: [block(1835, 974, [
        ...t.expenses.map((item) => line(item, 39, { weight: 800, color: RED_LABEL })),
        line('$value', 37, { color: RED_LABEL }),
      ], { lineGap: 10 })] },
      other_income: { blocks: [block(2180, 457, [
        line(t.other, 34, { weight: 800, color: GREEN_LABEL }),
        line('$value', 32, { color: GREEN_LABEL }),
      ])] },
      net_profit: { blocks: [block(2374, 321, [
        line(t.net, 42, { weight: 800, color: GREEN_LABEL }),
        line('$value', 38, { color: GREEN_LABEL }), line(t.margin11, 28, { color: NOTE }),
        line(t.pp2, 28, { color: NOTE }),
      ], { anchor: 'start', lineGap: 10 })] },
      tax: { blocks: [block(2478, 558, [
        line(t.tax, 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ])] },
      technology_content: { blocks: [rightExpense(t.technology, 700, t.share16, 2365)] },
      fulfillment: { blocks: [rightExpense(t.fulfillment, 893, t.share15, 2351)] },
      sm: { blocks: [rightExpense(t.sm, 1047, t.share7, 2388)] },
      ga: { blocks: [rightExpense(t.ga, 1198, t.share2, 2394)] },
      other_opex: {
        blocks: [block(2355, 1331,
          t.otherOpex.map((item) => line(item, 27, { weight: 800, color: RED_LABEL })),
          { anchor: 'start' })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q2-fy25',
    name: 'Amazon · Q2 FY25',
    company: 'Amazon',
    meta: {
      company: 'Amazon', title: 'Amazon Q2 FY25 Income Statement',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 133, titleWeight: 800, titleTextLength: 2245,
    },
    render: {
      width: 2667, height: 1500, background: BG, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: '#111111' },
        hub: { node: ORANGE, label: '#111111' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 2,
      nodes: {
        online_stores: { x: 398, y: 304, width: 71, height: 123 },
        physical_store: { x: 398, y: 551, width: 71, height: 9 },
        third_party_seller_services: { x: 398, y: 673, width: 71, height: 81 },
        advertising: { x: 398, y: 874, width: 71, height: 30 },
        subscription: { x: 398, y: 1025, width: 71, height: 22 },
        aws: { x: 398, y: 1158, width: 71, height: 60 },
        other_revenue: { x: 398, y: 1334, width: 71, height: 1 },
        revenue: { x: 865, y: 646, width: 70, height: 336 },
        gross_profit: { x: 1332, y: 533, width: 71, height: 174 },
        cost_of_sales: { x: 1332, y: 914, width: 71, height: 161 },
        operating_profit: { x: 1800, y: 440, width: 70, height: 36 },
        operating_expenses: { x: 1800, y: 820, width: 70, height: 134 },
        other_income: { x: 2145, y: 438, width: 70, height: 2 },
        net_profit: { x: 2266, y: 352, width: 71, height: 35 },
        tax: { x: 2266, y: 583, width: 71, height: 3 },
        technology_content: { x: 2266, y: 729, width: 71, height: 52 },
        fulfillment: { x: 2266, y: 910, width: 71, height: 50 },
        sm: { x: 2266, y: 1088, width: 71, height: 21 },
        ga: { x: 2266, y: 1238, width: 71, height: 3 },
        other_opex: { x: 2266, y: 1349, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'aws_operating_profit', representation: 'annotation', label: 'AWS operating profit',
        value: 10.2, valueText: '$10.2B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other_operating_profit', representation: 'annotation', label: 'Other',
        value: 9.0, valueText: '$9.0B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 61.5, notes: ['+11% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.6, notes: ['+7% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 40.3, notes: ['+12% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 15.7, notes: ['+23% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 12.2, notes: ['+12% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 30.9, notes: ['+17% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.5, notes: ['+19% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 167.7, notes: ['+13% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 86.9, notes: ['52% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 80.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 19.2, notes: ['11% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 67.7 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 1.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 18.1, notes: ['11% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.7 },
      { id: 'technology_content', col: 5, order: 2, type: 'cost', label: 'Technology & content', value: 27.2, notes: ['16% of revenue', '+1pp Y/Y'] },
      { id: 'fulfillment', col: 5, order: 3, type: 'cost', label: 'Fulfillment', value: 26.0, notes: ['15% of revenue', '(0pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 11.4, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 3.0, notes: ['2% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex',
        value: 0.2, color: RED_LINK, labelColor: RED_LABEL },
    ],
    links: [
      { source: 'online_stores', target: 'revenue', value: 61.5, sourceWidth: 123, targetWidth: 123, y0: 365.5, y1: 707.5, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.6, sourceWidth: 9, targetWidth: 11, y0: 555.5, y1: 774.5, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 40.3, sourceWidth: 81, targetWidth: 81, y0: 713.5, y1: 820.5, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 15.7, sourceWidth: 30, targetWidth: 31, y0: 889, y1: 876.5, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 12.2, sourceWidth: 22, targetWidth: 24, y0: 1036, y1: 904, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 30.9, sourceWidth: 60, targetWidth: 62, y0: 1188, y1: 947, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.5, sourceWidth: 1, targetWidth: 4, y0: 1334.5, y1: 980, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 86.9, sourceWidth: 174, targetWidth: 174, y0: 733, y1: 620, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 80.8, sourceWidth: 162, targetWidth: 161, y0: 901, y1: 994.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 19.2, sourceWidth: 38, targetWidth: 36, y0: 552, y1: 458, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 67.7, sourceWidth: 135, targetWidth: 134, y0: 639.5, y1: 887, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 16.5, sourceWidth: 32, targetWidth: 32, y0: 456, y1: 368, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.7, sourceWidth: 4, targetWidth: 3, y0: 474, y1: 584.5, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 1.7, sourceWidth: 2, targetWidth: 3, y0: 439, y1: 385.5, targetOrder: 1 },
      { source: 'operating_expenses', target: 'technology_content', value: 27.2, sourceWidth: 54, targetWidth: 52, y0: 847, y1: 755, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'fulfillment', value: 26.0, sourceWidth: 51, targetWidth: 50, y0: 899.5, y1: 935, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 11.4, sourceWidth: 22, targetWidth: 21, y0: 936, y1: 1098.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 3.0, sourceWidth: 6, targetWidth: 3, y0: 950, y1: 1239.5, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2,
        sourceWidth: 1, targetWidth: 2, y0: 953.5, y1: 1350, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Amazon · 2025 财年第二季度',
        meta: { title: 'Amazon 2025 财年第二季度利润表', titleSize: 127, titleTextLength: 2020 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他业务' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +11%'] },
          physical_store: { label: '实体商店', notes: ['同比 +7%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +12%'] },
          advertising: { label: '广告', notes: ['同比 +23%'] },
          subscription: { label: '订阅', notes: ['同比 +12%'] },
          aws: { label: 'AWS', notes: ['同比 +17%'] },
          other_revenue: { label: '其他', notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          technology_content: { label: '技术与内容', notes: ['占收入 16%', '同比 +1 个百分点'] },
          fulfillment: { label: '履约', notes: ['占收入 15%', '同比 (0 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

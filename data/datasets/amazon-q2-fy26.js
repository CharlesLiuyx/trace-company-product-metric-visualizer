/* Amazon — Q2 FY26 income statement ($B), measured fixed-layout d3/SVG. */
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
  const TITLE = '#155077';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
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
      <g transform="translate(1714 516)">
        <path d="M20 29H102L116 0L142 29H211Q229 29 229 47V128Q229 146 211 146H20Q0 146 0 128V47Q0 29 20 29Z"
          fill="${BG}" stroke="#1d1d1d" stroke-width="3"/>
        <g class="sankey-interactive-annotation" data-node="aws_operating_profit">
          <rect x="18" y="36" width="198" height="47" fill="transparent"/>
          ${icon('amazonAws', 24, 41, 0.17)}
          <text x="118" y="68" font-size="32" fill="${GREEN_LABEL}">$16.6B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="other_operating_profit">
          <rect x="18" y="85" width="198" height="48" fill="transparent"/>
          <text x="24" y="126" font-size="31" font-weight="800"
            fill="#333333">${zh ? '其他' : 'Other'}</text>
          <text x="128" y="126" font-size="28" fill="${GREEN_LABEL}">$10.8B</text>
        </g>
      </g>
      <g fill="${NOTE}" font-size="20">
        <text x="2305" y="264">${zh ? '* 主要来自 Anthropic' : '* Primarily gains from'}</text>
        <text x="2305" y="292">${zh ? '投资收益' : 'investments in Anthropic'}</text>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      online: '线上商店', physical: '实体商店', third: ['第三方卖家', '服务'],
      advertising: '广告', subscription: '订阅', other: '其他', otherStar: '其他 *', revenue: '收入',
      gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['运营', '费用'],
      net: '净利润', tax: '税费', technology: ['技术与基础设施', '($33.2B)'],
      fulfillment: ['履约 ($29.6B)'], sm: ['销售与市场 ($11.7B)'], ga: ['管理费用 ($2.8B)'],
      otherOpex: ['其他运营费用 ($0.1B)'],
      yoy20: '同比 +20%', yoy15: '同比 +15%', yoy4: '同比 +4%', yoy16: '同比 +16%',
      yoy26: '同比 +26%', yoy12: '同比 +12%', yoy37: '同比 +37%', yoy22: '同比 +22%',
      margin52: '利润率 52%', margin14: '利润率 14%', margin31: '利润率 31%',
      pp0: '同比 +0 个百分点', pp2: '同比 +2 个百分点', pp20: '同比 +20 个百分点',
      ppDown1: '同比 (1 个百分点)', share17: '占收入 17%', share15: '占收入 15%',
      share6: '占收入 6%', share1: '占收入 1%',
    } : {
      online: 'Online Stores', physical: 'Physical Stores', third: ['3rd party', 'seller services'],
      advertising: 'Advertising', subscription: 'Subscription', other: 'Other', otherStar: 'Other *',
      revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax',
      technology: ['Technology &', 'infrastructure', '($33.2B)'], fulfillment: ['Fulfillment ($29.6B)'],
      sm: ['S&M ($11.7B)'], ga: ['G&A ($2.8B)'], otherOpex: ['Other opex ($0.1B)'],
      yoy20: '+20% Y/Y', yoy15: '+15% Y/Y', yoy4: '+4% Y/Y', yoy16: '+16% Y/Y',
      yoy26: '+26% Y/Y', yoy12: '+12% Y/Y', yoy37: '+37% Y/Y', yoy22: '+22% Y/Y',
      margin52: '52% margin', margin14: '14% margin', margin31: '31% margin',
      pp0: '+0pp Y/Y', pp2: '+2pp Y/Y', pp20: '+20pp Y/Y', ppDown1: '(1pp) Y/Y',
      share17: '17% of revenue', share15: '15% of revenue', share6: '6% of revenue', share1: '1% of revenue',
    };
    const sourceName = (text, top, x = 345) => block(x, top,
      (Array.isArray(text) ? text : [text]).map((item) =>
        line(item, 38, { weight: 800, color: '#111111' })),
      { anchor: 'end', lineGap: 9, semanticRole: 'source-reference-name' });
    const sourceValue = (top, note, x = 426, lineGap = 8) => block(x, top, [
      line('$value', 34, { color: '#111111' }),
      line(note, 23, { color: NOTE }),
    ], { lineGap });
    const rightExpense = (names, top, share, pp, x) => block(x, top, [
      ...names.map((item) => line(item, 29, { weight: 800, color: RED_LABEL })),
      line(share, 28, { color: NOTE }),
      line(pp, 28, { color: NOTE }),
    ], { anchor: 'start' });
    return {
      online_stores: { blocks: [sourceName(t.online, 355, 337), sourceValue(274, t.yoy15, 418)] },
      physical_store: { blocks: [sourceName(t.physical, 516, 326), sourceValue(520, t.yoy4, 426)] },
      third_party_seller_services: { blocks: [sourceName(t.third, 702, 338), sourceValue(632, t.yoy16)] },
      advertising: { blocks: [sourceName(t.advertising, 852, 335), sourceValue(834, t.yoy26, 426, 1)] },
      subscription: { blocks: [sourceName(t.subscription, 997, 348), sourceValue(949, t.yoy12, 433)] },
      aws: { blocks: [sourceValue(1084, t.yoy37)] },
      other_revenue: { blocks: [sourceName(t.other, 1311, 339), sourceValue(1264, t.yoy22)] },
      revenue: { blocks: [block(920, 508, [
        line(t.revenue, 42, { weight: 800, color: '#111111' }),
        line('$value', 38, { color: '#111111' }), line(t.yoy20, 26, { color: NOTE }),
      ], { lineGap: 12 })] },
      gross_profit: { blocks: [block(1372, 377, [
        line(t.gross, 42, { weight: 800, color: GREEN_LABEL }),
        line('$value', 38, { color: GREEN_LABEL }), line(t.margin52, 28, { color: NOTE }),
        line(t.pp0, 28, { color: NOTE }),
      ], { lineGap: 11 })] },
      cost_of_sales: { blocks: [block(1358, 1170, [
        line(t.cost, 38, { weight: 800, color: RED_LABEL }),
        line('$value', 37, { color: RED_LABEL }),
      ], { lineGap: 11 })] },
      operating_profit: { blocks: [block(1834, 267, [
        line(t.operating, 42, { weight: 800, color: GREEN_LABEL }),
        line('$value', 38, { color: GREEN_LABEL }), line(t.margin14, 28, { color: NOTE }),
        line(t.pp2, 28, { color: NOTE }),
      ], { lineGap: 10 })] },
      operating_expenses: { blocks: [block(1825, 885, [
        ...t.expenses.map((item) => line(item, 39, { weight: 800, color: RED_LABEL })),
        line('$value', 37, { color: RED_LABEL }),
      ], { lineGap: 10 })] },
      other_income: { blocks: [block(2175, 204, [
        line(t.otherStar, 34, { weight: 800, color: GREEN_LABEL }),
        line('$value', 32, { color: GREEN_LABEL }),
      ])] },
      net_profit: { blocks: [block(2374, 309, [
        line(t.net, 42, { weight: 800, color: GREEN_LABEL }),
        line('$value', 38, { color: GREEN_LABEL }), line(t.margin31, 28, { color: NOTE }),
        line(t.pp20, 28, { color: NOTE }),
      ], { anchor: 'start', lineGap: 10 })] },
      tax: { blocks: [block(2473, 544, [
        line(t.tax, 30, { weight: 800, color: RED_LABEL }), line('$value', 30, { color: RED_LABEL }),
      ])] },
      technology_content: { blocks: [rightExpense(t.technology, 695, t.share17, t.pp0, 2372)] },
      fulfillment: { blocks: [rightExpense(t.fulfillment, 894, t.share15, t.ppDown1, 2343)] },
      sm: { blocks: [rightExpense(t.sm, 1029, t.share6, t.ppDown1, 2388)] },
      ga: { blocks: [rightExpense(t.ga, 1158, t.share1, t.pp0, 2390)] },
      other_opex: { blocks: [block(2355, 1270,
        t.otherOpex.map((item) => line(item, 27, { weight: 800, color: RED_LABEL })),
        { anchor: 'start' })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q2-fy26',
    name: 'Amazon · Q2 FY26',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q2 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2245,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
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
      linkTint: { source: ORANGE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1.914,
      routes: {
        other_opex: { x: 2257, y: 1285, width: 0, height: 2 },
      },
      nodes: {
        online_stores: { x: 389, y: 355, width: 71, height: 134 },
        physical_store: { x: 389, y: 598, width: 71, height: 10 },
        third_party_seller_services: { x: 389, y: 709, width: 71, height: 88 },
        advertising: { x: 389, y: 903, width: 71, height: 25 },
        subscription: { x: 389, y: 1032, width: 71, height: 35 },
        aws: { x: 389, y: 1168, width: 71, height: 80 },
        other_revenue: { x: 389, y: 1349, width: 71, height: 2 },
        revenue: { x: 856, y: 648, width: 70, height: 384 },
        gross_profit: { x: 1323, y: 558, width: 71, height: 200 },
        cost_of_sales: { x: 1323, y: 973, width: 71, height: 183 },
        operating_profit: { x: 1791, y: 453, width: 70, height: 51 },
        operating_expenses: { x: 1791, y: 802, width: 70, height: 70 },
        other_income: { x: 2128, y: 292, width: 70, height: 102 },
        net_profit: { x: 2257, y: 307, width: 71, height: 119 },
        tax: { x: 2257, y: 564, width: 71, height: 32 },
        technology_content: { x: 2257, y: 696, width: 71, height: 56 },
        fulfillment: { x: 2257, y: 875, width: 71, height: 62 },
        sm: { x: 2257, y: 1033, width: 71, height: 20 },
        ga: { x: 2257, y: 1164, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      {
        id: 'aws_operating_profit', representation: 'annotation', label: 'AWS operating profit',
        value: 16.6, valueText: '$16.6B', type: 'profit', labelColor: GREEN_LABEL,
      },
      {
        id: 'other_operating_profit', representation: 'annotation', label: 'Other operating profit',
        value: 10.8, valueText: '$10.8B', type: 'profit', labelColor: GREEN_LABEL,
      },
      {
        id: 'other_opex', representation: 'flow', label: 'Other opex',
        value: 0.1, valueText: '($0.1B)', type: 'cost', labelColor: RED_LABEL,
      },
    ],
    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 70.4, notes: ['+15% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Stores', value: 5.8, notes: ['+4% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party seller services', value: 46.8, notes: ['+16% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 19.8, notes: ['+26% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 13.7, notes: ['+12% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 42.2, notes: ['+37% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.8, notes: ['+22% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 200.6, notes: ['+20% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 104.8, notes: ['52% margin', '+0pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 95.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 27.5, notes: ['14% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 77.4 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other *', value: 53.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 62.6, notes: ['31% margin', '+20pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 18.2 },
      { id: 'technology_content', col: 5, order: 2, type: 'cost', label: 'Technology & infrastructure', value: 33.2, notes: ['17% of revenue', '+0pp Y/Y'] },
      { id: 'fulfillment', col: 5, order: 3, type: 'cost', label: 'Fulfillment', value: 29.6, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 11.7, notes: ['6% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.8, notes: ['1% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'online_stores', target: 'revenue', value: 70.4, sourceWidth: 134, targetWidth: 134, y0: 422, y1: 715, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.8, sourceWidth: 10, targetWidth: 12, y0: 603, y1: 788, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 46.8, sourceWidth: 88, targetWidth: 88, y0: 753, y1: 838, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 19.8, sourceWidth: 25, targetWidth: 26, y0: 915.5, y1: 895, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 13.7, sourceWidth: 35, targetWidth: 37, y0: 1049.5, y1: 926.5, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 42.2, sourceWidth: 80, targetWidth: 82, y0: 1208, y1: 986, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.8, sourceWidth: 2, targetWidth: 5, y0: 1350, y1: 1029.5, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 104.8, sourceWidth: 200, targetWidth: 200, y0: 748, y1: 658, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 95.8, sourceWidth: 184, targetWidth: 183, y0: 940, y1: 1064.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 27.5, sourceWidth: 50, targetWidth: 51, y0: 583, y1: 478.5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 77.4, sourceWidth: 150, targetWidth: 70, y0: 683, y1: 837, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 9.3, sourceWidth: 16, targetWidth: 15, y0: 461, y1: 418.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 18.2, sourceWidth: 35, targetWidth: 32, y0: 486.5, y1: 580, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 53.4, sourceWidth: 102, targetWidth: 103, y0: 343, y1: 358.5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_content', value: 33.2, sourceWidth: 30, targetWidth: 56, y0: 817, y1: 724, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'fulfillment', value: 29.6, sourceWidth: 25, targetWidth: 62, y0: 844.5, y1: 906, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 11.7, sourceWidth: 11, targetWidth: 20, y0: 862.5, y1: 1043, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 2.8, sourceWidth: 3, targetWidth: 3, y0: 869.5, y1: 1165.5, sourceOrder: 3 },
      { source: 'operating_expenses', targetRoute: 'other_opex', value: 0.1,
        sourceWidth: 1, targetWidth: 2, y0: 871.5, y1: 1285, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Amazon · 2026 财年第二季度',
        meta: { title: 'Amazon 2026 财年第二季度利润表', titleSize: 127, titleTextLength: 2020 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他业务营业利润' },
          other_opex: { label: '其他运营费用' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +15%'] },
          physical_store: { label: '实体商店', notes: ['同比 +4%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +16%'] },
          advertising: { label: '广告', notes: ['同比 +26%'] },
          subscription: { label: '订阅', notes: ['同比 +12%'] },
          aws: { label: 'AWS', notes: ['同比 +37%'] },
          other_revenue: { label: '其他', notes: ['同比 +22%'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他 *' },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +20 个百分点'] },
          tax: { label: '税费' },
          technology_content: { label: '技术与基础设施', notes: ['占收入 17%', '同比 +0 个百分点'] },
          fulfillment: { label: '履约', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

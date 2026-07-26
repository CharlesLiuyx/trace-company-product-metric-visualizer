/* Amazon — Q2 FY23 income statement ($B), reconstructed object-by-object
 * from input/processed/amazon-q2-fy23.png. Business marks reuse the shared
 * SVG icon registry; all financial geometry and labels are native SVG. */
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
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};

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
    <g transform="translate(${x} ${y}) scale(${scale})"
      data-typography-role="brand">${ICONS[name] || ''}</g>`;

  const annotations = (zh) => `
    <g>
      ${icon('amazonCompanyWordmark', 655, 286, 1.15)}
      ${icon('amazonDotCom', 112, 468, 0.72)}
      ${icon('amazonSubscriptionCluster', 104, 941, 0.53)}
      ${icon('amazonAdvertisingCluster', 118, 1095, 0.49)}
      ${icon('amazonAws', 203, 1197, 0.46)}
      <g transform="translate(1715 499)">
        <path d="M20 145C9 145 0 136 0 125V49C0 38 9 29 20 29H90L116 0L142 29H209C220 29 229 38 229 49V125C229 136 220 145 209 145Z"
          fill="${BG}" stroke="#000000" stroke-width="3"/>
        <g class="sankey-interactive-annotation"
          data-node="aws_operating_profit">
          ${icon('amazonAws', 24, 37, 0.22)}
          <text x="128" y="68" font-family="Noto Sans,Arial,sans-serif"
            font-size="31" font-weight="400" fill="${GREEN_LABEL}">$5.4B</text>
        </g>
        <g class="sankey-interactive-annotation"
          data-node="other_operating_profit">
          <text x="24" y="124" font-family="Noto Sans,Arial,sans-serif"
            font-size="31" font-weight="800" fill="#222222">${zh ? '其他' : 'Other'}</text>
          <text x="128" y="124" font-family="Noto Sans,Arial,sans-serif"
            font-size="31" font-weight="400" fill="${GREEN_LABEL}">$2.3B</text>
        </g>
      </g>
    </g>`;

  const labels = (zh) => {
    const copy = zh ? {
      online: '线上商店',
      physical: '实体商店',
      third: ['第三方卖家', '服务'],
      subscription: '订阅',
      advertising: '广告',
      other: '其他',
      revenue: '收入',
      gross: '毛利润',
      cost: ['销售', '成本'],
      operating: '营业利润',
      expenses: ['运营', '费用'],
      net: '净利润',
      tax: '税费',
      interest: '利息/其他',
      fulfillment: '履约',
      technology: ['技术与', '内容'],
      sm: '销售与市场',
      ga: '管理费用',
      otherOpex: '其他运营费用',
      yoy4: '同比 +4%',
      yoy6: '同比 +6%',
      yoy18: '同比 +18%',
      yoy14: '同比 +14%',
      yoy22: '同比 +22%',
      yoy12: '同比 +12%',
      yoy26: '同比 +26%',
      yoy11: '同比 +11%',
      margin48: '利润率 48%',
      margin6: '利润率 6%',
      margin5: '利润率 5%',
      pp3: '同比 +3 个百分点',
      pp7: '同比 +7 个百分点',
      rev16: '占收入 16%',
      rev8: '占收入 8%',
      rev2: '占收入 2%',
      pp1down: '同比 (1 个百分点)',
      pp1up: '同比 +1 个百分点',
      pp0: '同比 +0 个百分点',
    } : {
      online: 'Online Store',
      physical: 'Physical Store',
      third: ['3rd party', 'sellers services'],
      subscription: 'Subscription',
      advertising: 'Advertising',
      other: 'Other',
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'sales'],
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      net: 'Net profit',
      tax: 'Tax',
      interest: 'Interest/Other',
      fulfillment: 'Fulfillment',
      technology: ['Technology &', 'content'],
      sm: 'S&M',
      ga: 'G&A',
      otherOpex: 'Other opex',
      yoy4: '+4% Y/Y',
      yoy6: '+6% Y/Y',
      yoy18: '+18% Y/Y',
      yoy14: '+14% Y/Y',
      yoy22: '+22% Y/Y',
      yoy12: '+12% Y/Y',
      yoy26: '+26% Y/Y',
      yoy11: '+11% Y/Y',
      margin48: '48% margin',
      margin6: '6% margin',
      margin5: '5% margin',
      pp3: '+3pp Y/Y',
      pp7: '+7pp Y/Y',
      rev16: '16% of revenue',
      rev8: '8% of revenue',
      rev2: '2% of revenue',
      pp1down: '(1pp) Y/Y',
      pp1up: '+1pp Y/Y',
      pp0: '+0pp Y/Y',
    };
    const source = (valueTop, nameX, nameTop, name, yoy) => ({
      blocks: [
        block(428, valueTop, [line('$value', 34), line(yoy, 23, { color: NOTE })], { lineGap: 8 }),
        block(nameX, nameTop, (Array.isArray(name) ? name : [name]).map((text) =>
          line(text, 38, { weight: 800 })), {
            anchor: 'end',
            lineGap: 9,
            semanticRole: 'source-group',
          }),
      ],
    });
    const green = (text, size = 42) => line(text, size, { weight: 800, color: GREEN_LABEL });
    const greenValue = () => line('$value', 38, { color: GREEN_LABEL });
    const red = (text, size = 30) => line(text, size, { weight: 800, color: RED_LABEL });
    const redValue = (size = 30) => line('$value', size, { color: RED_LABEL });
    const note = (text, size = 28) => line(text, size, { color: NOTE });

    return {
      online_stores: source(291, 349, 411, copy.online, copy.yoy4),
      physical_store: source(541, 344, 605, copy.physical, copy.yoy6),
      third_party_seller_services: source(656, 346, 734, copy.third, copy.yoy18),
      subscription: source(851, 342, 895, copy.subscription, copy.yoy14),
      advertising: source(984, 339, 1040, copy.advertising, copy.yoy22),
      aws: { blocks: [block(428, 1113, [line('$value', 34), line(copy.yoy12, 23, { color: NOTE })], { lineGap: 8 })] },
      other_revenue: source(1282, 333, 1331, copy.other, copy.yoy26),
      revenue: {
        blocks: [block(893, 474, [
          line(copy.revenue, 42, { weight: 800 }),
          line('$value', 38),
          note(copy.yoy11, 26),
        ], { lineGap: 12 })],
      },
      gross_profit: {
        blocks: [block(1358, 343, [
          green(copy.gross),
          greenValue(),
          note(copy.margin48),
          note(copy.pp3),
        ], { lineGap: 11 })],
      },
      cost_of_sales: {
        blocks: [block(1356, 1094, [
          ...copy.cost.map((text) => red(text, 38)),
          redValue(37),
        ], { lineGap: 10 })],
      },
      operating_profit: {
        blocks: [block(1833, 274, [
          green(copy.operating),
          greenValue(),
          note(copy.margin6),
          note(copy.pp3),
        ], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1847, 1026, [
          ...copy.expenses.map((text) => red(text, 39)),
          redValue(37),
        ], { lineGap: 10 })],
      },
      net_profit: {
        blocks: [block(2349, 334, [
          green(copy.net),
          greenValue(),
          note(copy.margin5),
          note(copy.pp7),
        ], { anchor: 'start', lineGap: 10 })],
      },
      tax: {
        blocks: [block(2404, 531, [red(copy.tax), redValue()], { anchor: 'start', lineGap: 8 })],
      },
      interest_other: {
        blocks: [block(2342, 638, [red(copy.interest), redValue()], { anchor: 'start', lineGap: 8 })],
      },
      fulfillment: {
        blocks: [block(2340, 763, [
          red(`${copy.fulfillment} ($21.3B)`),
          note(copy.rev16),
          note(copy.pp1down),
        ], { anchor: 'start', lineGap: 8 })],
      },
      technology_content: {
        blocks: [block(2358, 902, [
          ...copy.technology.map((text, index) => red(index === copy.technology.length - 1 ? `${text} ($21.9B)` : text)),
          note(copy.rev16),
          note(copy.pp1up),
        ], { anchor: 'start', lineGap: 8 })],
      },
      sm: {
        blocks: [block(2384, 1075, [
          red(`${copy.sm} ($10.7B)`),
          note(copy.rev8),
          note(copy.pp0),
        ], { anchor: 'start', lineGap: 8 })],
      },
      ga: {
        blocks: [block(2386, 1211, [
          red(`${copy.ga} ($3.2B)`),
          note(copy.rev2),
          note(copy.pp0),
        ], { anchor: 'start', lineGap: 8 })],
      },
      other_opex: {
        blocks: [block(2353, 1359, [
          red(`${copy.otherOpex} ($0.1B)`, 28),
        ], { anchor: 'start' })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q2-fy23',
    name: 'Amazon · Q2 FY23',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q2 FY23 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q2-fy23.png', width: 2667, height: 1500 },
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
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: '#000000' },
        hub: { node: ORANGE, label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'aws_operating_profit', representation: 'annotation', value: 5.4, type: 'profit' },
      { id: 'other_operating_profit', representation: 'annotation', value: 2.3, type: 'profit' },
    ],
    layout: {
      scale: 1,
      nodes: {
        online_stores: { x: 392, y: 374, width: 71, height: 138 },
        physical_store: { x: 392, y: 627, width: 71, height: 12 },
        third_party_seller_services: { x: 392, y: 739, width: 71, height: 84 },
        subscription: { x: 392, y: 933, width: 71, height: 25 },
        advertising: { x: 392, y: 1068, width: 71, height: 27 },
        aws: { x: 392, y: 1197, width: 71, height: 58 },
        other_revenue: { x: 392, y: 1367, width: 71, height: 1 },
        revenue: { x: 859, y: 625, width: 70, height: 349 },
        gross_profit: { x: 1323, y: 529, width: 72, height: 166 },
        cost_of_sales: { x: 1328, y: 899, width: 72, height: 178 },
        operating_profit: { x: 1796, y: 458, width: 70, height: 20 },
        operating_expenses: { x: 1811, y: 870, width: 70, height: 147 },
        net_profit: { x: 2260, y: 378, width: 71, height: 17 },
        tax: { x: 2260, y: 570, width: 71, height: 1 },
        interest_other: { x: 2260, y: 671, width: 71, height: 1 },
        fulfillment: { x: 2260, y: 753, width: 71, height: 54 },
        technology_content: { x: 2260, y: 932, width: 71, height: 56 },
        sm: { x: 2260, y: 1101, width: 71, height: 28 },
        ga: { x: 2260, y: 1247, width: 71, height: 8 },
        other_opex: { x: 2260, y: 1372, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Store', value: 53.0, valueText: '$53.0B', notes: ['+4% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.0, valueText: '$5.0B', notes: ['+6% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 32.3, notes: ['+18% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 3, type: 'source', label: 'Subscription', value: 9.9, notes: ['+14% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 4, type: 'source', label: 'Advertising', value: 10.7, notes: ['+22% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 22.1, notes: ['+12% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.3, notes: ['+26% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 134.3, notes: ['+11% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 65.0, valueText: '$65.0B', notes: ['48% margin', '+3pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 69.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 7.7, notes: ['6% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 57.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 6.7, notes: ['5% margin', '+7pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
      { id: 'interest_other', col: 5, order: 2, type: 'cost', label: 'Interest/Other', value: 0.1 },
      { id: 'fulfillment', col: 5, order: 3, type: 'cost', label: 'Fulfillment', value: 21.3, notes: ['16% of revenue', '(1pp) Y/Y'] },
      { id: 'technology_content', col: 5, order: 4, type: 'cost', label: 'Technology & content', value: 21.9, notes: ['16% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 5, order: 5, type: 'cost', label: 'S&M', value: 10.7, notes: ['8% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 3.2, notes: ['2% of revenue', '+0pp Y/Y'] },
      { id: 'other_opex', col: 5, order: 7, type: 'cost', label: 'Other opex', value: 0.1 },
    ],
    links: [
      { source: 'online_stores', target: 'revenue', value: 53.0, sourceWidth: 138, targetWidth: 138, y0: 443, y1: 694, sourceOrder: 0, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.0, sourceWidth: 12, targetWidth: 12, y0: 633, y1: 769, sourceOrder: 0, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 32.3, sourceWidth: 84, targetWidth: 84, y0: 781, y1: 817, sourceOrder: 0, targetOrder: 2 },
      { source: 'subscription', target: 'revenue', value: 9.9, sourceWidth: 25, targetWidth: 26, y0: 945.5, y1: 872, sourceOrder: 0, targetOrder: 3 },
      { source: 'advertising', target: 'revenue', value: 10.7, sourceWidth: 27, targetWidth: 28, y0: 1081.5, y1: 899, sourceOrder: 0, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 22.1, sourceWidth: 58, targetWidth: 58, y0: 1226, y1: 942, sourceOrder: 0, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, sourceWidth: 1, targetWidth: 3, y0: 1367.5, y1: 972.5, sourceOrder: 0, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 65.0, sourceWidth: 168, targetWidth: 166, y0: 709, y1: 612, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 69.4, sourceWidth: 181, targetWidth: 178, y0: 883.5, y1: 988, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 7.7, sourceWidth: 19, targetWidth: 20, y0: 538.5, y1: 468, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 57.3, sourceWidth: 147, targetWidth: 147, y0: 621.5, y1: 943.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 6.7, sourceWidth: 18, targetWidth: 17, y0: 467, y1: 386.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 1, targetWidth: 1, y0: 476.5, y1: 570.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest_other', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 477.5, y1: 671.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'fulfillment', value: 21.3, sourceWidth: 54, targetWidth: 54, y0: 897, y1: 780, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_content', value: 21.9, sourceWidth: 56, targetWidth: 56, y0: 952, y1: 960, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 10.7, sourceWidth: 27, targetWidth: 28, y0: 993.5, y1: 1115, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 3.2, sourceWidth: 8, targetWidth: 8, y0: 1011, y1: 1251, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 1016, y1: 1372.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Amazon · 2023 财年第二季度',
        meta: {
          title: 'Amazon 2023 财年第二季度利润表',
          titleSize: 112,
          titleTextLength: 1760,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          aws_operating_profit: { label: 'AWS 营业利润' },
          other_operating_profit: { label: '其他营业利润' },
        },
        nodes: {
          online_stores: { label: '线上商店', notes: ['同比 +4%'] },
          physical_store: { label: '实体商店', notes: ['同比 +6%'] },
          third_party_seller_services: { label: '第三方卖家服务', notes: ['同比 +18%'] },
          subscription: { label: '订阅', notes: ['同比 +14%'] },
          advertising: { label: '广告', notes: ['同比 +22%'] },
          aws: { label: 'AWS', notes: ['同比 +12%'] },
          other_revenue: { label: '其他', notes: ['同比 +26%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 +3 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          interest_other: { label: '利息/其他' },
          fulfillment: { label: '履约', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          technology_content: { label: '技术与内容', notes: ['占收入 16%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 8%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 +0 个百分点'] },
          other_opex: { label: '其他运营费用' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

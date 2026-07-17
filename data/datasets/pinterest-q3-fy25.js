/* Pinterest Q3 FY25 income statement ($M), measured from the Build-bound reference. */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const NOTE = '#6f7073';
  const TITLE = '#154f79';
  const BLUE = '#183078';
  const BLUE_LINK = '#909bbb';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#078f43';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2520;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 9, lines });
  const SCALE = 314 / 1049;

  const card = (x, y, width, height, lines) => `
    <g><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${Math.min(31, height / 4)}" fill="#cf0009"/>
    ${lines.map((item) => `<text x="${x + width / 2}" y="${y + item.y}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 500}" fill="#fff">${item.text}</text>`).join('')}</g>`;
  const userStack = (lines) => `
    <g><path d="M128 417L157 461H100Z" fill="#cf0009"/><rect x="60" y="461" width="132" height="707" rx="11" fill="#cf0009"/>
    ${lines.map((item) => `<text x="126" y="${item.y}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 500}" fill="#fff">${item.text}</text>`).join('')}</g>`;
  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(34, 226, 187, 168, [{ text: 'MAU', y: 57, size: 35, weight: 800 }, { text: '600M', y: 103, size: 32, weight: 800 }, { text: isZh ? '同比 +12%' : '+12% Y/Y', y: 141, size: 20 }])}
      ${userStack([{ text: '103M', y: 540, size: 35, weight: 800 }, { text: isZh ? '同比 +4%' : '+4% Y/Y', y: 580, size: 24 }, { text: '150M', y: 863, size: 35, weight: 800 }, { text: isZh ? '同比 +8%' : '+8% Y/Y', y: 903, size: 24 }, { text: '347M', y: 1089, size: 35, weight: 800 }, { text: isZh ? '同比 +16%' : '+16% Y/Y', y: 1129, size: 24 }])}
      ${card(321, 1127, 209, 150, [{ text: 'ARPU', y: 64, size: 29, weight: 800 }, { text: '$1.70', y: 98, size: 27 }, { text: isZh ? '同比 +5%' : '+5% Y/Y', y: 132, size: 21 }])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" fill="${NOTE}">MAU = ${isZh ? '月活跃用户' : 'Monthly Active Users'}</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" fill="${NOTE}">ARPU = ${isZh ? '每用户平均收入' : 'Average Revenue Per User'}</text>
    </g>`;

  const layoutLabels = {
    us_canada: { blocks: [block(468, 359, [line('$value', 39), line('+9% Y/Y', 29, { color: NOTE })]), block(392, 548, [line('US &', 40, { weight: 800 }), line('Canada', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    europe: { blocks: [block(462, 730, [line('$value', 39), line('+41% Y/Y', 29, { color: NOTE })]), block(386, 840, [line('Europe', 40, { weight: 800 })], { anchor: 'end' })] },
    rest_of_world: { blocks: [block(476, 929, [line('$value', 39), line('+67% Y/Y', 29, { color: NOTE })]), block(400, 991, [line('Rest of', 40, { weight: 800 }), line('the world', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    revenue: { blocks: [block(935, 454, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+17% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1403, 318, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('80% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1403, 1037, [line('Cost of', 33, { weight: 800 }), line('revenue', 33, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1881, 239, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('6% margin', 29, { color: NOTE }), line('+6pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1870, 851, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_29: { blocks: [block(2206, 228, [line('Other', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    other_5: { blocks: [block(2210, 445, [line('Other', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    net_profit: { blocks: [block(2503, 300, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('9% margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })])] },
    rnd: { blocks: [block(2506, 680, [line('R&D', 31, { weight: 800 }), line('$value', 29), line('35% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    sm: { blocks: [block(2511, 920, [line('S&M', 31, { weight: 800 }), line('$value', 29), line('28% of revenue', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(2512, 1133, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('11% of revenue', 28, { color: NOTE }), line('(5pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    tax: { blocks: [] },
  };

  const zhLabels = {
    us_canada: { blocks: [block(468, 350, [line('$value', 39), line('同比 +9%', 29, { color: NOTE })]), block(392, 535, [line('美国和', 40, { weight: 800 }), line('加拿大', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    europe: { blocks: [block(468, 730, [line('$value', 39), line('同比 +41%', 29, { color: NOTE })]), block(392, 840, [line('欧洲', 40, { weight: 800 })], { anchor: 'end' })] },
    rest_of_world: { blocks: [block(468, 929, [line('$value', 39), line('同比 +67%', 29, { color: NOTE })]), block(392, 991, [line('世界', 40, { weight: 800 }), line('其他地区', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    revenue: { blocks: [block(935, 457, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +17%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1403, 319, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 80%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1403, 1036, [line('收入', 33, { weight: 800 }), line('成本', 33, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1870, 240, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 6%', 29, { color: NOTE }), line('同比 +6 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1870, 861, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_29: { blocks: [block(2206, 236, [line('其他', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    other_5: { blocks: [block(2206, 453, [line('其他', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 310, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 9%', 29, { color: NOTE }), line('同比 +5 个百分点', 29, { color: NOTE })])] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 682, [line('研发', 31, { weight: 800 }), line('$value', 29), line('占收入 35%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    sm: { blocks: [block(RIGHT_LABEL_X, 921, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 28%', 28, { color: NOTE }), line('同比 +1 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1135, [line('管理费用', 31, { weight: 800 }), line('$value', 29), line('占收入 11%', 28, { color: NOTE }), line('同比 (5 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pinterest-q3-fy25', name: 'Pinterest · Q3 FY25', company: 'Pinterest',
    meta: {
      company: 'Pinterest', title: 'Pinterest Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/pinterest-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2248,
      hidePeriodStamp: true, logoWidth: 220, logoHeight: 220, logoY: 220, logoViewBox: '0 0 208 208', logoSvg: BUSINESS_ICONS.pinterestLogo || '',
    },
    render: { width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } }, linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, labelYOffset: 0, type: { name: 40, value: 39, note: 29, lineGap: 9 } },
    annotationsSvg: annotations(false),
    layout: {
      scale: SCALE,
      nodes: {
        us_canada: { x: 432, y: 450, width: 73, height: 236 }, europe: { x: 432, y: 833, width: 73, height: 56 }, rest_of_world: { x: 432, y: 1022, width: 73, height: 18 }, revenue: { x: 899, y: 599, width: 72, height: 314 },
        gross_profit: { x: 1367, y: 503, width: 72, height: 250 }, cost_of_revenue: { x: 1367, y: 952, width: 72, height: 61 }, operating_profit: { x: 1834, y: 420, width: 72, height: 15 }, operating_expenses: { x: 1834, y: 605, width: 72, height: 233 },
        other_29: { x: 2170, y: 319, width: 73, height: 8 }, other_5: { x: 2173, y: 431, width: 72, height: 2 }, net_profit: { x: 2301, y: 343, width: 73, height: 28 },
        rnd: { x: 2301, y: 660, width: 72, height: 110 }, sm: { x: 2301, y: 904, width: 72, height: 88 }, ga: { x: 2301, y: 1148, width: 72, height: 30 },
      },
      labels: layoutLabels,
    },
    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],

    nodes: [
      { id: 'us_canada', col: 0, order: 0, type: 'source', label: ['US &', 'Canada'], value: 786, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 193, notes: ['+41% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'rest_of_world', col: 0, order: 2, type: 'source', label: ['Rest of', 'the world'], value: 70, notes: ['+67% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1049, valueText: '$1,049M', notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 837, notes: ['80% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 212, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 58, notes: ['6% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 778, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_29', col: 4, order: 0, type: 'profit', label: 'Other', value: 29, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_5', col: 4, order: 1, type: 'profit', label: 'Other', value: 5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 92, notes: ['9% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 371, notes: ['35% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 297, notes: ['28% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 110, notes: ['11% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'us_canada', target: 'revenue', value: 786, width: 236, sourceWidth: 236, targetWidth: 236, y0: 568, y1: 717, sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 193, width: 56, sourceWidth: 56, targetWidth: 56, y0: 861, y1: 863, sourceOrder: 0, targetOrder: 1 },
      { source: 'rest_of_world', target: 'revenue', value: 70, width: 18, sourceWidth: 18, targetWidth: 22, y0: 1031, y1: 902, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 837, width: 250, sourceWidth: 250, targetWidth: 250, y0: 724, y1: 628, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 212, width: 61, sourceWidth: 64, targetWidth: 61, y0: 881, y1: 982.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 58, width: 15, sourceWidth: 17, targetWidth: 15, y0: 511.5, y1: 427.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 778, width: 233, sourceWidth: 233, targetWidth: 233, y0: 636.5, y1: 721.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 58, width: 16, sourceWidth: 15, targetWidth: 16, y0: 427.5, y1: 359, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_29', target: 'net_profit', value: 29, width: 8, sourceWidth: 8, targetWidth: 8, y0: 323, y1: 347, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_5', target: 'net_profit', value: 5, width: 2, sourceWidth: 2, targetWidth: 2, y0: 432, y1: 368, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 371, width: 110, sourceWidth: 110, targetWidth: 110, y0: 660, y1: 715, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 297, width: 88, sourceWidth: 89, targetWidth: 88, y0: 759.5, y1: 948, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 110, width: 30, sourceWidth: 34, targetWidth: 30, y0: 821, y1: 1163, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Pinterest · 2025 财年第三季度', meta: { title: 'Pinterest 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleSize: 112, titleTextLength: 1660 }, annotationsSvg: annotations(true),
        nodes: { us_canada: { label: '美国和加拿大', notes: ['同比 +9%'] }, europe: { label: '欧洲', notes: ['同比 +41%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +67%'] }, revenue: { label: '收入', notes: ['同比 +17%'] }, gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +6 个百分点'] }, operating_expenses: { label: '运营费用' }, other_29: { label: '其他' }, other_5: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +5 个百分点'] }, rnd: { label: '研发', notes: ['占收入 35%', '同比 (1 个百分点)'] }, sm: { label: '销售与营销', notes: ['占收入 28%', '同比 +1 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 11%', '同比 (5 个百分点)'] }},
        layout: { labels: { ...zhLabels, tax: { blocks: [] } } },
      },
    },
  });
})();

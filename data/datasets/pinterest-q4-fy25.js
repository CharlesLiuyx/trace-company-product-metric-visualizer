/* Pinterest Q4 FY25 income statement ($M), measured from the processed reference. */
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
  const SCALE = 357 / 1319;

  const card = (x, y, width, height, lines) => `
    <g><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${Math.min(31, height / 4)}" fill="#cf0009"/>
    ${lines.map((item) => `<text x="${x + width / 2}" y="${y + item.y}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 500}" fill="#fff">${item.text}</text>`).join('')}</g>`;
  const userStack = (lines) => `
    <g><path d="M128 417L157 461H100Z" fill="#cf0009"/><rect x="60" y="461" width="132" height="707" rx="11" fill="#cf0009"/>
    ${lines.map((item) => `<text x="126" y="${item.y}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 500}" fill="#fff">${item.text}</text>`).join('')}</g>`;
  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(34, 226, 187, 168, [{ text: 'MAU', y: 57, size: 35, weight: 800 }, { text: '619M', y: 103, size: 32, weight: 800 }, { text: isZh ? '同比 +12%' : '+12% Y/Y', y: 141, size: 20 }])}
      ${userStack([{ text: '105M', y: 540, size: 35, weight: 800 }, { text: isZh ? '同比 +4%' : '+4% Y/Y', y: 580, size: 24 }, { text: '158M', y: 863, size: 35, weight: 800 }, { text: isZh ? '同比 +9%' : '+9% Y/Y', y: 903, size: 24 }, { text: '356M', y: 1089, size: 35, weight: 800 }, { text: isZh ? '同比 +16%' : '+16% Y/Y', y: 1129, size: 24 }])}
      ${card(321, 1127, 209, 150, [{ text: 'ARPU', y: 64, size: 29, weight: 800 }, { text: '$2.16', y: 98, size: 27 }, { text: isZh ? '同比 +2%' : '+2% Y/Y', y: 132, size: 21 }])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" fill="${NOTE}">MAU = ${isZh ? '月活跃用户' : 'Monthly Active Users'}</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" fill="${NOTE}">ARPU = ${isZh ? '每用户平均收入' : 'Average Revenue Per User'}</text>
    </g>`;

  const layoutLabels = {
    us_canada: { blocks: [block(468, 350, [line('$value', 39), line('+9% Y/Y', 29, { color: NOTE })]), block(392, 535, [line('US &', 40, { weight: 800 }), line('Canada', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    europe: { blocks: [block(468, 748, [line('$value', 39), line('+25% Y/Y', 29, { color: NOTE })]), block(392, 851, [line('Europe', 40, { weight: 800 })], { anchor: 'end' })] },
    rest_of_world: { blocks: [block(468, 957, [line('$value', 39), line('+65% Y/Y', 29, { color: NOTE })]), block(392, 997, [line('Rest of', 40, { weight: 800 }), line('the world', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    revenue: { blocks: [block(935, 428, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+14% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1403, 307, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('83% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1403, 1078, [line('Cost of', 33, { weight: 800 }), line('revenue', 33, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1870, 224, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('23% margin', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1870, 904, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other: { blocks: [block(2205, 445, [line('Other', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 269, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('21% margin', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 533, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 717, [line('R&D', 31, { weight: 800 }), line('$value', 29), line('28% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    sm: { blocks: [block(RIGHT_LABEL_X, 960, [line('S&M', 31, { weight: 800 }), line('$value', 29), line('23% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1199, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('9% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
  };

  const zhLabels = {
    us_canada: { blocks: [block(468, 350, [line('$value', 39), line('同比 +9%', 29, { color: NOTE })]), block(392, 535, [line('美国和', 40, { weight: 800 }), line('加拿大', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    europe: { blocks: [block(468, 748, [line('$value', 39), line('同比 +25%', 29, { color: NOTE })]), block(392, 851, [line('欧洲', 40, { weight: 800 })], { anchor: 'end' })] },
    rest_of_world: { blocks: [block(468, 957, [line('$value', 39), line('同比 +65%', 29, { color: NOTE })]), block(392, 997, [line('世界', 40, { weight: 800 }), line('其他地区', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    revenue: { blocks: [block(935, 438, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +14%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1403, 317, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 83%', 29, { color: NOTE }), line('同比 0 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1403, 1088, [line('收入', 33, { weight: 800 }), line('成本', 33, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1870, 234, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 23%', 29, { color: NOTE }), line('同比 +0 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1870, 914, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other: { blocks: [block(2205, 453, [line('其他', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 279, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 21%', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 543, [line('税费', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 727, [line('研发', 31, { weight: 800 }), line('$value', 29), line('占收入 28%', 28, { color: NOTE }), line('同比 0 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    sm: { blocks: [block(RIGHT_LABEL_X, 970, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 23%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1209, [line('管理费用', 31, { weight: 800 }), line('$value', 29), line('占收入 9%', 28, { color: NOTE }), line('同比 0 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pinterest-q4-fy25', name: 'Pinterest · Q4 FY25', company: 'Pinterest',
    meta: {
      company: 'Pinterest', title: 'Pinterest Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/pinterest-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2248,
      periodX: -1000, periodY: -1000, periodNoteY: -950, logoWidth: 220, logoHeight: 220, logoY: 220, logoViewBox: '0 0 208 208', logoSvg: BUSINESS_ICONS.pinterestLogo || '',
    },
    render: { width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } }, linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, labelYOffset: 0, type: { name: 40, value: 39, note: 29, lineGap: 9 } },
    annotationsSvg: annotations(false),
    layout: {
      scale: SCALE,
      nodes: {
        us_canada: { x: 432, y: 450, width: 73, height: 267 }, europe: { x: 432, y: 848, width: 73, height: 67 }, rest_of_world: { x: 432, y: 1054, width: 73, height: 26 }, revenue: { x: 899, y: 581, width: 72, height: 359 },
        gross_profit: { x: 1367, y: 502, width: 71, height: 296 }, cost_of_revenue: { x: 1367, y: 1004, width: 71, height: 64 }, operating_profit: { x: 1834, y: 413, width: 72, height: 82 }, operating_expenses: { x: 1834, y: 680, width: 72, height: 216 }, other: { x: 2169, y: 431, width: 72, height: 7 }, net_profit: { x: 2301, y: 306, width: 72, height: 74 }, tax: { x: 2301, y: 579, width: 72, height: 13 }, rnd: { x: 2301, y: 725, width: 72, height: 100 }, sm: { x: 2301, y: 968, width: 72, height: 82 }, ga: { x: 2301, y: 1207, width: 72, height: 33 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'us_canada', col: 0, order: 0, type: 'source', label: ['US &', 'Canada'], value: 979, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 245, notes: ['+25% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'rest_of_world', col: 0, order: 2, type: 'source', label: ['Rest of', 'the world'], value: 96, notes: ['+65% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1319, valueText: '$1,319M', notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1093, notes: ['83% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 227, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 301, notes: ['23% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 791, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 27, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 277, notes: ['21% margin'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 51, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 365, notes: ['28% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 303, notes: ['23% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 123, notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      // The source has independently rounded endpoint widths. Keep each
      // interface's measured occupancy (rather than deriving it from values)
      // so the closed ribbons meet the node face without residual slivers.
      { source: 'us_canada', target: 'revenue', value: 979, width: 267, sourceWidth: 267, targetWidth: 267, y0: 583.5, y1: 714.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 245, width: 67, sourceWidth: 67, targetWidth: 67, y0: 881.5, y1: 881.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'rest_of_world', target: 'revenue', value: 96, width: 26, sourceWidth: 26, targetWidth: 25, y0: 1067, y1: 927.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1093, width: 298, sourceWidth: 298, targetWidth: 296, y0: 730, y1: 650, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 227, width: 64, sourceWidth: 61, targetWidth: 64, y0: 909.5, y1: 1036, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 301, width: 82, sourceWidth: 81, targetWidth: 82, y0: 542.5, y1: 454, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 791, width: 216, sourceWidth: 215, targetWidth: 216, y0: 690.5, y1: 788, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 250, width: 69, sourceWidth: 69, targetWidth: 67, y0: 447.5, y1: 339.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 51, width: 13, sourceWidth: 13, targetWidth: 13, y0: 488.5, y1: 585.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 27, width: 7, sourceWidth: 7, targetWidth: 7, y0: 434.5, y1: 376.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 365, width: 99, sourceWidth: 99, targetWidth: 99, y0: 729.5, y1: 775.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 303, width: 83, sourceWidth: 83, targetWidth: 82, y0: 820.5, y1: 1009, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 123, width: 34, sourceWidth: 34, targetWidth: 33, y0: 879, y1: 1223.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Pinterest · 2025 财年第四季度', meta: { title: 'Pinterest 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 112, titleTextLength: 1660 }, annotationsSvg: annotations(true),
        nodes: { us_canada: { label: '美国和加拿大', notes: ['同比 +9%'] }, europe: { label: '欧洲', notes: ['同比 +25%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +65%'] }, revenue: { label: '收入', notes: ['同比 +14%'] }, gross_profit: { label: '毛利润', notes: ['利润率 83%', '同比 0 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 +0 个百分点'] }, operating_expenses: { label: '运营费用' }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 21%'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 28%', '同比 0 个百分点'] }, sm: { label: '销售与营销', notes: ['占收入 23%', '同比 (1 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 9%', '同比 0 个百分点'] } },
        layout: { labels: zhLabels },
      },
    },
  });
})();

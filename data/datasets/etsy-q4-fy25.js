/* Etsy Q4 FY25 income statement ($M), measured from the processed reference. */
(function () {
  const NOTE = '#727272';
  const TITLE = '#155077';
  const ORANGE = '#eb6d20';
  const ORANGE_LINK = '#eeb693';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf9b';
  const RED = '#cc0000';
  const RED_LABEL = '#9a1405';
  const RED_LINK = '#df8182';
  const RIGHT_LABEL_X = 2474;
  const CARD_ORANGE = '#f27124';
  const SCALE = 288 / 882;
  const line = (text, size, options = {}) => ({ text, size, weight: options.weight || 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 9, lines });

  const etsyLogo = `
    <rect x="0" y="0" width="244" height="244" rx="43" fill="${ORANGE}"/>
    <text x="122" y="136" text-anchor="middle" font-family="Georgia,serif" font-size="72" font-weight="400" fill="#fff">Etsy</text>`;

  const statCard = (x, width, lines) => `
    <g><rect x="${x}" y="1130" width="${width}" height="164" rx="31" fill="${CARD_ORANGE}"/>
      ${lines.map((item, index) => `<text x="${x + width / 2}" y="${1178 + index * 43}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 400}" fill="#fff">${item.text}</text>`).join('')}
    </g>`;
  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g data-typography-role="brand">
        <text x="241" y="653" text-anchor="middle" font-family="Georgia,serif" font-size="61" fill="${ORANGE}">Etsy</text>
        <text x="241" y="715" text-anchor="middle" font-size="52" font-weight="800" fill="#e51a0c">depop</text>
      </g>
      ${statCard(80, 163, [{ text: 'GMS', size: 28, weight: 800 }, { text: '$3.6B', size: 28 }, { text: isZh ? '同比 (4)%' : '(4)% Y/Y', size: 22 }])}
      ${statCard(251, 333, [{ text: isZh ? '活跃卖家' : 'Active sellers', size: 27, weight: 800 }, { text: '8.8M', size: 28 }, { text: isZh ? '同比 +8%' : '+8% Y/Y', size: 22 }])}
      ${statCard(589, 330, [{ text: isZh ? '活跃买家' : 'Active buyers', size: 27, weight: 800 }, { text: '93.5M', size: 28 }, { text: isZh ? '同比 (2)%' : '(2)% Y/Y', size: 22 }])}
      <text x="312" y="1354" text-anchor="middle" font-size="28" fill="${NOTE}">GMV = ${isZh ? '商品交易总额' : 'Gross Merchandise Sales'}</text>
      <g class="sankey-interactive-annotation" data-node="other">
        <rect x="2110" y="399" width="150" height="96" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="2159" y="444" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${isZh ? '其他' : 'Other'}</text>
        <text x="2159" y="488" text-anchor="middle" font-size="29" fill="${GREEN_LABEL}">$7M</text>
      </g>
    </g>`;

  const labels = {
    marketplace: { blocks: [block(426, 389, [line('$value', 39), line('+1% Y/Y', 29, { color: NOTE })]), block(319, 522, [line('Marketplace', 40, { weight: 800 })], { anchor: 'end' })] },
    services: { blocks: [block(426, 846, [line('$value', 39), line('+10% Y/Y', 29, { color: NOTE })]), block(319, 1009, [line('Services', 40, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(895, 483, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+3% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1359.5, 316, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('73% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1362, 1126, [line('Cost of', 34, { weight: 800 }), line('revenue', 34, { weight: 800 }), line('$value', 33)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1827, 218, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('15% margin', 29, { color: NOTE }), line('(4pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1828, 846, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other: { blocks: [] },
    net_profit: { blocks: [block(2382, 264, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('13% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 539, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7, anchor: 'start' })] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 691, [line('Marketing', 31, { weight: 800 }), line('$value', 29), line('35% of revenue', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 957, [line('R&D', 31, { weight: 800 }), line('$value', 29), line('13% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1164, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('11% of revenue', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
  };
  const zhLabels = {
    marketplace: { blocks: [block(426, 389, [line('$value', 39), line('同比 +1%', 29, { color: NOTE })]), block(319, 522, [line('交易市场', 40, { weight: 800 })], { anchor: 'end' })] },
    services: { blocks: [block(426, 846, [line('$value', 39), line('同比 +10%', 29, { color: NOTE })]), block(319, 1009, [line('服务', 40, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(895, 483, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +3%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1359.5, 316, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 73%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1362, 1136, [line('收入', 34, { weight: 800 }), line('成本', 34, { weight: 800 }), line('$value', 33)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1827, 218, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 15%', 29, { color: NOTE }), line('同比 (4 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1828, 856, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other: { blocks: [] },
    net_profit: { blocks: [block(2382, 274, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 13%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 549, [line('税费', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7, anchor: 'start' })] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 701, [line('营销', 31, { weight: 800 }), line('$value', 29), line('占收入 35%', 28, { color: NOTE }), line('同比 +1 个百分点', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 967, [line('研发', 31, { weight: 800 }), line('$value', 29), line('占收入 13%', 28, { color: NOTE }), line('同比 0 个百分点', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1174, [line('管理费用', 31, { weight: 800 }), line('$value', 29), line('占收入 11%', 28, { color: NOTE }), line('同比 +1 个百分点', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'etsy-q4-fy25', name: 'Etsy · Q4 FY25', company: 'Etsy',
    meta: {
      company: 'Etsy', title: 'Etsy Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/etsy-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2024,
      periodX: -1000, periodY: -1000, periodNoteY: -950, logoWidth: 234, logoHeight: 234, logoY: 216, logoViewBox: '0 0 244 244', logoSvg: etsyLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: ORANGE, label: ORANGE }, hub: { node: ORANGE, label: ORANGE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: SCALE,
      nodes: {
        marketplace: { x: 390, y: 478, width: 71, height: 253 }, services: { x: 390, y: 989, width: 71, height: 108 }, revenue: { x: 857, y: 621, width: 70, height: 364 },
        gross_profit: { x: 1324, y: 492, width: 71, height: 265 }, cost_of_revenue: { x: 1324, y: 995, width: 71, height: 96 }, operating_profit: { x: 1792, y: 394, width: 70, height: 52 }, operating_expenses: { x: 1792, y: 626, width: 70, height: 211 },
        other: { x: 2124, y: 399, width: 70, height: 3 }, net_profit: { x: 2258, y: 298, width: 71, height: 44 }, tax: { x: 2258, y: 537, width: 71, height: 9 }, marketing: { x: 2258, y: 665, width: 71, height: 125 }, rnd: { x: 2258, y: 932, width: 71, height: 45 }, ga: { x: 2258, y: 1117, width: 71, height: 37 },
      },
      labels,
    },
    nodes: [
      { id: 'marketplace', col: 0, order: 0, type: 'source', label: 'Marketplace', value: 612, notes: ['+1% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'services', col: 0, order: 1, type: 'source', label: 'Services', value: 269, notes: ['+10% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 882, notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 644, notes: ['73% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 238, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 129, notes: ['15% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 515, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 111, notes: ['13% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 26, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 2, type: 'cost', label: 'Marketing', value: 306, notes: ['35% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 114, notes: ['13% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 94, notes: ['11% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'marketplace', target: 'revenue', value: 612, sourceWidth: 253, targetWidth: 256, y0: 604.5, y1: 749, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 269, sourceWidth: 108, targetWidth: 108, y0: 1043, y1: 931, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 644, sourceWidth: 268, targetWidth: 265, y0: 755, y1: 624.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 238, sourceWidth: 96, targetWidth: 96, y0: 937, y1: 1043, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 129, sourceWidth: 54, targetWidth: 52, y0: 519, y1: 420, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 515, sourceWidth: 211, targetWidth: 211, y0: 651.5, y1: 731.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 104, sourceWidth: 43, targetWidth: 44, y0: 415.5, y1: 320, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 26, sourceWidth: 9, targetWidth: 9, y0: 441.5, y1: 541.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 7, sourceWidth: 3, targetWidth: 2, y0: 400.5, y1: 341, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN, right: GREEN_LINK }, curve: { c1x: 2220, c1y: 400.5, c2x: 2232, c2y: 341 } },
      { source: 'operating_expenses', target: 'marketing', value: 306, sourceWidth: 125, targetWidth: 125, y0: 688.5, y1: 727.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 114, sourceWidth: 49, targetWidth: 45, y0: 775.5, y1: 954.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 94, sourceWidth: 37, targetWidth: 37, y0: 818.5, y1: 1135.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Etsy', 'depop', 'GMS'],
      zh: {
        name: 'Etsy · 2025 财年第四季度',
        meta: { title: 'Etsy 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 112, titleTextLength: 1510 },
        annotationsSvg: annotations(true),
        nodes: {
          marketplace: { label: '交易市场', notes: ['同比 +1%'] }, services: { label: '服务', notes: ['同比 +10%'] }, revenue: { label: '收入', notes: ['同比 +3%'] }, gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (4 个百分点)'] }, operating_expenses: { label: '运营费用' }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (3 个百分点)'] }, tax: { label: '税费' }, marketing: { label: '营销', notes: ['占收入 35%', '同比 +1 个百分点'] }, rnd: { label: '研发', notes: ['占收入 13%', '同比 0 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 11%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

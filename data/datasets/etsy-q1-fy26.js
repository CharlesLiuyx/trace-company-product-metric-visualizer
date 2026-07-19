/* Etsy Q1 FY26 income statement ($M), measured from the Build-bound Source. */
(function () {
  const NOTE = '#666666';
  const TITLE = '#155077';
  const ORANGE = '#eb6d20';
  const ORANGE_LINK = '#eeb693';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2370;
  const CARD_ORANGE = '#f27124';
  const SCALE = 375 / 631;
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
    lineGap: options.lineGap || 9,
    lines,
  });

  const etsyLogo = `
    <g transform="translate(-4 0)">
      <rect x="0" y="0" width="244" height="244" rx="43" fill="#f1641e"/>
      <text x="122" y="146" text-anchor="middle" font-family="Georgia,serif" font-size="82" font-weight="400" fill="#fff">Etsy</text>
    </g>`;

  const statCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1154" width="${width}" height="164" rx="31" fill="${CARD_ORANGE}"/>
      ${lines.map((item, index) => `<text x="${x + width / 2}" y="${1206 + index * 43}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 400}" fill="#fff">${item.text}</text>`).join('')}
    </g>`;
  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="marketplace">
        <rect x="96" y="565" width="260" height="55" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="348" y="602" text-anchor="end" font-size="40" font-weight="800" fill="${ORANGE}">${isZh ? '交易市场' : 'Marketplace'}</text>
      </g>
      <g data-typography-role="brand">
        <text x="111" y="681" text-anchor="middle" font-family="Georgia,serif" font-size="61" fill="#f1641e">Etsy</text>
        <text x="279" y="683" text-anchor="middle" font-family="Georgia,serif" font-size="48" font-style="italic" font-weight="700" fill="#d27900">Reverb</text>
        <text x="211" y="762" text-anchor="middle" font-size="52" font-weight="800" fill="#ff2300">depop</text>
      </g>
      ${statCard(80, 163, [{ text: 'GMS', size: 28, weight: 800 }, { text: '$2.5B', size: 28 }, { text: isZh ? '同比 (4)%' : '(4)% Y/Y', size: 22 }])}
      ${statCard(251, 333, [{ text: isZh ? '活跃卖家' : 'Active sellers', size: 27, weight: 800 }, { text: '5.6M', size: 28 }, { text: isZh ? '同比 (1)%' : '(1)% Y/Y', size: 22 }])}
      ${statCard(589, 330, [{ text: isZh ? '活跃买家' : 'Active buyers', size: 27, weight: 800 }, { text: '86.6M', size: 28 }, { text: isZh ? '同比 (3)%' : '(3)% Y/Y', size: 22 }])}
      <text x="312" y="1355" text-anchor="middle" font-size="28" fill="${NOTE}">GMV = ${isZh ? '商品交易总额' : 'Gross Merchandise Sales'}</text>
    </g>`;

  const labels = {
    marketplace: { blocks: [block(426, 430, [line('$value', 39), line('+1% Y/Y', 29, { color: NOTE })])] },
    services: { blocks: [block(419, 900, [line('$value', 39), line('+8% Y/Y', 29, { color: NOTE })]), block(312, 1030, [line('Services', 40, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(895, 485, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+3% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1367, 350, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('72% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1362, 1127, [line('Cost of', 34, { weight: 800 }), line('revenue', 34, { weight: 800 }), line('$value', 33)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1827, 250, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('19% margin', 29, { color: NOTE }), line('+20pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1828, 940, [line('Operating', 36, { weight: 800 }), line('Expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other: { blocks: [block(2175, 451, [line('Other', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    net_profit: { blocks: [block(2370, 291, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('17% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(2428, 557, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7, anchor: 'start' })] },
    marketing: { blocks: [block(RIGHT_LABEL_X + 10, 792, [line('Marketing', 31, { weight: 800 }), line('$value', 29), line('28% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 983, [line('R&D', 31, { weight: 800 }), line('$value', 29), line('16% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    ga: { blocks: [block(RIGHT_LABEL_X + 10, 1161, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('10% of revenue', 28, { color: NOTE }), line('(2pp) Y/Y', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
  };
  const zhLabels = {
    marketplace: { blocks: [block(426, 430, [line('$value', 39), line('同比 +1%', 29, { color: NOTE })])] },
    services: { blocks: [block(419, 900, [line('$value', 39), line('同比 +8%', 29, { color: NOTE })]), block(312, 1030, [line('服务', 40, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(895, 485, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +3%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1367, 350, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 72%', 29, { color: NOTE }), line('同比 0 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1362, 1137, [line('收入', 34, { weight: 800 }), line('成本', 34, { weight: 800 }), line('$value', 33)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1827, 250, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 19%', 29, { color: NOTE }), line('同比 +20 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1828, 950, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other: { blocks: [block(2175, 451, [line('其他', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7 })] },
    net_profit: { blocks: [block(2370, 301, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 17%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(2428, 567, [line('税费', 31, { weight: 800 }), line('$value', 29)], { lineGap: 7, anchor: 'start' })] },
    marketing: { blocks: [block(RIGHT_LABEL_X + 10, 802, [line('营销', 31, { weight: 800 }), line('$value', 29), line('占收入 28%', 28, { color: NOTE }), line('同比 0 个百分点', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 993, [line('研发', 31, { weight: 800 }), line('$value', 29), line('占收入 16%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
    ga: { blocks: [block(RIGHT_LABEL_X + 10, 1171, [line('管理费用', 31, { weight: 800 }), line('$value', 29), line('占收入 10%', 28, { color: NOTE }), line('同比 (2 个百分点)', 28, { color: NOTE })], { lineGap: 8, anchor: 'start' })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'etsy-q1-fy26',
    name: 'Etsy · Q1 FY26',
    company: 'Etsy',
    meta: {
      company: 'Etsy',
      title: 'Etsy Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/etsy-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1980,
      hidePeriodStamp: true,
      logoWidth: 244,
      logoHeight: 244,
      logoY: 225,
      logoViewBox: '0 0 244 244',
      logoSvg: etsyLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: SCALE,
      nodes: {
        marketplace: { x: 390, y: 526, width: 71, height: 255 },
        services: { x: 390, y: 995, width: 71, height: 116 },
        revenue: { x: 857, y: 631, width: 70, height: 375 },
        gross_profit: { x: 1324, y: 533, width: 71, height: 271 },
        cost_of_revenue: { x: 1324, y: 1006, width: 71, height: 103 },
        operating_profit: { x: 1794, y: 430, width: 70, height: 70 },
        operating_expenses: { x: 1794, y: 724, width: 70, height: 197 },
        other: { x: 2139, y: 432, width: 70, height: 3 },
        net_profit: { x: 2258, y: 321, width: 71, height: 60 },
        tax: { x: 2258, y: 589, width: 71, height: 12 },
        marketing: { x: 2258, y: 796, width: 71, height: 102 },
        rnd: { x: 2258, y: 1015, width: 71, height: 58 },
        ga: { x: 2258, y: 1180, width: 71, height: 35 },
      },
      labels,
    },
    nodes: [
      { id: 'marketplace', col: 0, order: 0, type: 'source', label: 'Marketplace', value: 433, notes: ['+1% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'services', col: 0, order: 1, type: 'source', label: 'Services', value: 199, notes: ['+8% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 631, notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 456, notes: ['72% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 176, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 120, notes: ['19% margin', '+20pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 336, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 105, notes: ['17% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 25, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 2, type: 'cost', label: 'Marketing', value: 174, notes: ['28% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 99, notes: ['16% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 63, notes: ['10% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'marketplace', target: 'revenue', value: 433, sourceWidth: 255, targetWidth: 257, y0: 653.5, y1: 759.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 199, sourceWidth: 116, targetWidth: 118, y0: 1053, y1: 947, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 456, sourceWidth: 271, targetWidth: 271, y0: 766.5, y1: 668.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 176, sourceWidth: 103, targetWidth: 103, y0: 954.5, y1: 1057.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 120, sourceWidth: 73, targetWidth: 70, y0: 569.5, y1: 465, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 336, sourceWidth: 198, targetWidth: 197, y0: 705, y1: 822.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 96, sourceWidth: 57, targetWidth: 55, y0: 458.5, y1: 348.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 25, sourceWidth: 13, targetWidth: 12, y0: 493.5, y1: 595, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 9, sourceWidth: 3, targetWidth: 5, y0: 433.5, y1: 378.5, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN, right: GREEN_LINK }, curve: { c1x: 2220, c1y: 433.5, c2x: 2234, c2y: 378.5 } },
      { source: 'operating_expenses', target: 'marketing', value: 174, sourceWidth: 102, targetWidth: 102, y0: 775, y1: 847, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 99, sourceWidth: 58, targetWidth: 58, y0: 855, y1: 1044, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 63, sourceWidth: 37, targetWidth: 35, y0: 902.5, y1: 1197.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Etsy', 'Reverb', 'depop', 'GMS'],
      zh: {
        name: 'Etsy · 2026 财年第一季度',
        meta: {
          title: 'Etsy 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1510,
        },
        annotationsSvg: annotations(true),
        nodes: {
          marketplace: { label: '交易市场', notes: ['同比 +1%'] },
          services: { label: '服务', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 +20 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          marketing: { label: '营销', notes: ['占收入 28%', '同比 0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* Chewy Q4 FY25 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE_NODE = '#1c49c2';
  const BLUE_LABEL = '#1b48c2';
  const BLUE_LINK = '#92a6db';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const PALE_RED_NODE = '#e0c7c7';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2495;

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
    lines,
  });

  const kpiCard = (x, width, heading, value, options = {}) => `
    <g>
      <rect x="${x}" y="1185" width="${width}" height="165" rx="31" fill="${BLUE_LABEL}"/>
      <text x="${x + width / 2}" y="1260" text-anchor="middle" font-size="${options.headingSize || 31}" font-weight="800" fill="#fff">${heading}</text>
      <text x="${x + width / 2}" y="1300" text-anchor="middle" font-size="${options.valueSize || 31}" font-weight="500" fill="#fff">${value}</text>
    </g>`;

  const semanticCallout = (id, x, headingY, valueY, heading, value, anchorY) => `
    <g class="sankey-interactive-annotation"
      data-node="${id}"
      data-link-numerator="${id}"
      data-link-denominator="operating_profit"
      data-link-anchor-x="2160"
      data-link-anchor-y="${anchorY}">
      <text x="${x}" y="${headingY}" text-anchor="middle" font-size="31" font-weight="800" fill="${RED_LABEL}">${heading}</text>
      <text x="${x}" y="${valueY}" text-anchor="middle" font-size="31" font-weight="400" fill="${RED_LABEL}">${value}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(49, 331, isZh ? '活跃客户' : 'Active customers', isZh ? '21M（同比 +4%）' : '21M (+4% Y/Y)', { headingSize: isZh ? 30 : 31 })}
      ${kpiCard(393, 379, isZh ? '每位客户净销售额' : 'Net sale per customer', isZh ? '$591（同比 +2%）' : '$591 (+2% Y/Y)', { headingSize: isZh ? 28 : 31 })}
      ${kpiCard(786, 304, isZh ? 'Autoship 销售额' : 'Autoship sales', isZh ? '84%（同比 +3 个百分点）' : '84% (+3pp Y/Y)', { headingSize: isZh ? 28 : 31, valueSize: isZh ? 23 : 31 })}
      ${semanticCallout('interest', 2494, 640, 681, isZh ? '利息' : 'Interest', '($0.4M)', 650)}
      <g class="sankey-period-stamp">
        <text x="${isZh ? 2198 : 2218}" y="1207" text-anchor="middle" font-size="42" font-weight="800" fill="#666">${isZh ? '2025 财年第四季度' : 'Q4 FY25'}</text>
        <text x="${isZh ? 2198 : 2218}" y="1250" text-anchor="middle" font-size="29" fill="#666">${isZh ? '截至 2026 年 1 月' : 'Ending Jan. 2026'}</text>
      </g>
    </g>`;

  const labels = {
    consumables: {
      blocks: [
        block(475, 349, [line('$value', 40), line('(1%) Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 543, [line('Consumables', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    hardgoods: {
      blocks: [
        block(475, 793, [line('$value', 40), line('+9% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(384, 882, [line('Hardgoods', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    other: {
      blocks: [
        block(475, 1005, [line('$value', 40), line('(0%) Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(346, 1113, [line('Other', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: { blocks: [block(942, 490, [line('Net sales', 40, { weight: 800 }), line('$value', 40), line('+1% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 325, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('29% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_goods_sold: { blocks: [block(1409, 1118, [line('Cost of', 36, { weight: 800 }), line('goods sold', 36, { weight: 800 }), line('$value', 36)], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1876, 251, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('1% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 293, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('2% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 494, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    interest: { blocks: [] },
    operating_expenses: { blocks: [block(1876, 744, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 771, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('21% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    advertising_marketing: { blocks: [block(RIGHT_LABEL_X, 1027, [line('Advertising &', 30, { weight: 800 }), line('Marketing', 30, { weight: 800 }), line('$value', 29), line('7% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
  };

  const zhLabels = {
    consumables: {
      blocks: [
        block(475, 349, [line('$value', 40), line('同比 (1%)', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 543, [line('消耗品', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    hardgoods: {
      blocks: [
        block(475, 793, [line('$value', 40), line('同比 +9%', 29, { color: NOTE })], { lineGap: 12 }),
        block(384, 882, [line('耐用品', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    other: {
      blocks: [
        block(475, 1005, [line('$value', 40), line('同比 (0%)', 29, { color: NOTE })], { lineGap: 12 }),
        block(346, 1113, [line('其他', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: { blocks: [block(942, 490, [line('净销售额', 40, { weight: 800 }), line('$value', 40), line('同比 +1%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 325, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 29%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_goods_sold: { blocks: [block(1409, 1118, [line('销售', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1876, 251, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 1%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 293, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 2%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 494, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    interest: { blocks: [] },
    operating_expenses: { blocks: [block(1876, 744, [line('营业', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 771, [line('一般及行政费用', 30, { weight: 800 }), line('$value', 29), line('占收入 21%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    advertising_marketing: { blocks: [block(RIGHT_LABEL_X, 1027, [line('广告与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 7%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chewy-q4-fy25',
    name: 'Chewy · Q4 FY25',
    company: 'Chewy',
    meta: {
      company: 'Chewy',
      title: 'Chewy Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/chewy-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2190,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE_NODE, label: BLUE_LABEL },
        hub: { node: BLUE_NODE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'chewy-company-wordmark', href: 'data/assets/raster-annotations/chewy/company-wordmark-q1-fy26.png', x: 573, y: 248, width: 700, height: 225 },
      { key: 'chewy-pet-parent-screen', href: 'data/assets/raster-annotations/chewy/pet-parent-screen-q1-fy26.png', x: 1560, y: 1000, width: 530, height: 320 },
    ],
    layout: {
      scale: 1,
      routes: {
        interest: { x: 2308, y: 650, width: 0, height: 1 },
      },
      nodes: {
        consumables: { x: 438, y: 443, width: 72, height: 245 },
        hardgoods: { x: 438, y: 886, width: 72, height: 45 },
        other: { x: 438, y: 1101, width: 72, height: 65 },
        revenue: { x: 906, y: 640, width: 72, height: 353 },
        gross_profit: { x: 1374, y: 517, width: 72, height: 104 },
        cost_of_goods_sold: { x: 1374, y: 856, width: 72, height: 249 },
        operating_profit: { x: 1840, y: 442, width: 72, height: 3 },
        operating_expenses: { x: 1840, y: 630, width: 72, height: 98 },
        net_profit: { x: 2308, y: 346, width: 72, height: 1 },
        tax: { x: 2308, y: 525, width: 72, height: 2 },
        ga: { x: 2308, y: 771, width: 72, height: 76 },
        advertising_marketing: { x: 2308, y: 1054, width: 72, height: 27 },
      },
      labels,
    },
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.0004, valueText: '($0.4M)', type: 'cost', labelColor: RED_LABEL },
    ],
    nodes: [
      { id: 'consumables', col: 0, order: 0, type: 'source', label: 'Consumables', value: 2.3, notes: ['(1%) Y/Y'], color: BLUE_NODE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'hardgoods', col: 0, order: 1, type: 'source', label: 'Hardgoods', value: 0.4, notes: ['+9% Y/Y'], color: BLUE_NODE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 2, type: 'source', label: 'Other', value: 0.6, notes: ['(0%) Y/Y'], color: BLUE_NODE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 3.3, notes: ['+1% Y/Y'], color: BLUE_NODE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.0, valueText: '$1.0B', notes: ['29% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_goods_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'goods sold'], value: 2.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.043, valueText: '$43M', notes: ['1% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.039, valueText: '$39M', notes: ['2% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.003, valueText: '($3M)', color: PALE_RED_NODE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 0.7, notes: ['21% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'advertising_marketing', col: 5, order: 3, type: 'cost', label: ['Advertising &', 'Marketing'], value: 0.2, notes: ['7% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'consumables', target: 'revenue', value: 2.3, sourceWidth: 245, targetWidth: 245, y0: 565.5, y1: 763.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'hardgoods', target: 'revenue', value: 0.4, sourceWidth: 45, targetWidth: 45, y0: 908.5, y1: 908.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'revenue', value: 0.6, sourceWidth: 65, targetWidth: 62, y0: 1133.5, y1: 962, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1.0, sourceWidth: 105, targetWidth: 104, y0: 693.5, y1: 569, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_goods_sold', value: 2.3, sourceWidth: 247, targetWidth: 249, y0: 869.5, y1: 980.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.043, sourceWidth: 3, targetWidth: 3, y0: 518.5, y1: 443.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9, sourceWidth: 100, targetWidth: 98, y0: 570, y1: 679, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.039, sourceWidth: 1, targetWidth: 1, y0: 442.5, y1: 346.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.003, sourceWidth: 1, targetWidth: 2, y0: 443.5, y1: 526, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', targetRoute: 'interest', value: 0.0004, sourceWidth: 1, targetWidth: 1, y0: 444.5, y1: 650.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, sourceWidth: 72, targetWidth: 75, y0: 666, y1: 808.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'advertising_marketing', value: 0.2, sourceWidth: 26, targetWidth: 27, y0: 715, y1: 1067.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Chewy · 2025 财年第四季度',
        meta: {
          title: 'Chewy 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 108,
          titleTextLength: 1570,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          interest: { label: '利息' },
        },
        nodes: {
          consumables: { label: '消耗品', notes: ['同比 (1%)'] },
          hardgoods: { label: '耐用品', notes: ['同比 +9%'] },
          other: { label: '其他', notes: ['同比 (0%)'] },
          revenue: { label: '净销售额', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          cost_of_goods_sold: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          ga: { label: '一般及行政费用', notes: ['占收入 21%', '同比 (1 个百分点)'] },
          advertising_marketing: { label: '广告与营销', notes: ['占收入 7%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

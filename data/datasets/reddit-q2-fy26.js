/* ====================================================================
 * Reddit - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/reddit-q2-fy26.png as a fixed
 * d3-sankey layout with approved reusable Reddit raster annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const BACKGROUND = '#f2f2f2';
  const GRAY = '#666666';
  const TITLE = '#155077';
  const ORANGE = '#ff2400';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';
  const ART_SCALE = 2667 / 4686;

  const statCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="52" fill="${ORANGE}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + 72 + index * 72}" text-anchor="middle" font-size="${line.size || 54}" font-weight="${line.weight || 700}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (zh) => `
    <g transform="scale(${ART_SCALE})" font-family="Noto Sans,Arial,sans-serif">
      <text x="176" y="1941" font-size="40" font-weight="500" fill="${GRAY}">${zh ? 'DAUq = 日活跃独立用户' : 'DAUq = Daily Active Uniques'}</text>
      <text x="205" y="2023" font-size="40" font-weight="500" fill="${GRAY}">${zh ? 'WAUq = 周活跃独立用户' : 'WAUq = Weekly Active Uniques'}</text>
      <text x="160" y="2101" font-size="40" font-weight="500" fill="${GRAY}">${zh ? 'ARPU = 每独立用户平均收入' : 'ARPU = Average Revenue Per Unique'}</text>
      ${statCard(86, 2127, 993, 263, zh ? [
        { text: '<tspan font-weight="800">平均 DAUq</tspan> 130M，同比 +18%', size: 48 },
        { text: '<tspan font-weight="800">平均 WAUq</tspan> 515M，同比 +24%', size: 48 },
      ] : [
        { text: '<tspan font-weight="800">Average DAUq</tspan> 130M +18% Y/Y' },
        { text: '<tspan font-weight="800">Average WAUq</tspan> 515M +24% Y/Y' },
      ])}
      ${statCard(1090, 2127, 611, 263, zh ? [
        { text: '<tspan font-weight="800">季度 ARPU</tspan>', size: 50 },
        { text: '$6.18', weight: 500 },
        { text: '同比 +36%', size: 43, weight: 500 },
      ] : [
        { text: '<tspan font-weight="800">Quarterly ARPU</tspan>' },
        { text: '$6.18', weight: 500 },
        { text: '+36% Y/Y', size: 43, weight: 500 },
      ])}
    </g>`;

  const labels = {
    advertising: { blocks: [
      { x: 400, top: 446, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+64% Y/Y', size: 29, weight: 400, color: GRAY }] },
      { x: 311, top: 619, anchor: 'end', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 400, top: 864, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+24% Y/Y', size: 29, weight: 400, color: GRAY }] },
      { x: 258, top: 944, anchor: 'end', semanticRole: 'top-aligned-side-label', lineGap: 10, lines: [{ text: 'Other', size: 40, weight: 800 }, { text: 'Data API Access', size: 29, weight: 400, color: GRAY, textLength: 150 }, { text: 'Model Training', size: 29, weight: 400, color: GRAY, textLength: 150 }] },
    ] },
    revenue_by_product: { blocks: [{ x: 711, top: 477, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+61% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    united_states: { blocks: [{ x: 1022, top: 382, anchor: 'middle', lineGap: 9, lines: [{ text: 'United States', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+56% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    rest_of_world: { blocks: [{ x: 1022, top: 1054, anchor: 'middle', lineGap: 9, lines: [{ text: 'Rest of World', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+84% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    revenue: { blocks: [{ x: 1334, top: 484, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+61% Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    gross_profit: { blocks: [{ x: 1652, top: 336, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '91% margin', size: 29, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    cost_of_revenue: { blocks: [{ x: 1645, top: 985, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1958, top: 266, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '29% margin', size: 29, weight: 400, color: GRAY }, { text: '+15pp Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    operating_expenses: { blocks: [{ x: 1958, top: 869, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800 }, { text: 'expenses', size: 36, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    other_income: { blocks: [{ x: 2149, top: 518, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2337, top: 334, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '31% margin', size: 29, weight: 400, color: GRAY }, { text: '+14pp Y/Y', size: 29, weight: 400, color: GRAY }] }] },
    tax: { blocks: [{ x: 2428, top: 628, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
    rnd: { blocks: [{ x: 2429, top: 739, anchor: 'middle', lineGap: 8, lines: [{ text: 'Research &', size: 31, weight: 800 }, { text: 'development', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '29% of revenue', size: 28, weight: 400, color: GRAY }, { text: '(11pp) Y/Y', size: 28, weight: 400, color: GRAY }] }] },
    sm: { blocks: [{ x: 2429, top: 950, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales &', size: 31, weight: 800 }, { text: 'marketing', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '24% of revenue', size: 28, weight: 400, color: GRAY }, { text: '+0pp Y/Y', size: 28, weight: 400, color: GRAY }] }] },
    ga: { blocks: [{ x: 2429, top: 1154, anchor: 'middle', lineGap: 8, lines: [{ text: 'General &', size: 31, weight: 800 }, { text: 'admin', size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }, { text: '9% of revenue', size: 28, weight: 400, color: GRAY }, { text: '(4pp) Y/Y', size: 28, weight: 400, color: GRAY }] }] },
  };

  const zhLabels = JSON.parse(JSON.stringify(labels));
  const zhText = {
    advertising: [['$value', '同比 +64%'], ['广告']],
    other_revenue: [['$value', '同比 +24%'], ['其他', 'Data API 访问', '模型训练']],
    revenue_by_product: [['收入', '$value', '同比 +61%']], united_states: [['美国', '$value', '同比 +56%']], rest_of_world: [['世界其他地区', '$value', '同比 +84%']], revenue: [['收入', '$value', '同比 +61%']],
    gross_profit: [['毛利润', '$value', '利润率 91%', '同比 +0 个百分点']], cost_of_revenue: [['收入', '成本', '$value']], operating_profit: [['营业利润', '$value', '利润率 29%', '同比 +15 个百分点']], operating_expenses: [['运营', '费用', '$value']], other_income: [['其他', '$value']],
    net_profit: [['净利润', '$value', '利润率 31%', '同比 +14 个百分点']], tax: [['税费', '$value']], rnd: [['研发', '费用', '$value', '占收入 29%', '同比 (11 个百分点)']], sm: [['销售与', '市场', '$value', '占收入 24%', '同比 +0 个百分点']], ga: [['一般及', '管理费用', '$value', '占收入 9%', '同比 (4 个百分点)']],
  };
  Object.entries(zhText).forEach(([id, blockTexts]) => blockTexts.forEach((texts, blockIndex) => texts.forEach((text, lineIndex) => { zhLabels[id].blocks[blockIndex].lines[lineIndex].text = text; })));

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'reddit-q2-fy26',
    name: 'Reddit · Q2 FY26',
    company: 'Reddit',
    meta: {
      company: 'Reddit', title: 'Reddit Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/reddit-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2128,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true, nodeRadius: 0,
      titleColor: TITLE, subtitleColor: GRAY, noteColor: GRAY,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/reddit/company-wordmark-q4-fy25.png', x: 324, y: 249, width: 570, height: 168 },
      { key: 'united-states-flag', href: 'data/assets/raster-annotations/reddit/region-united-states-flag-q4-fy25.png', x: 996, y: 325, width: 58, height: 45 },
      { key: 'rest-of-world-globe', href: 'data/assets/raster-annotations/reddit/region-rest-of-world-globe-q4-fy25.png', x: 987, y: 980, width: 65, height: 65 },
      { key: 'snoo-mascot', href: 'data/assets/raster-annotations/reddit/company-snoo-mascot-q4-fy25.png', x: 1195, y: 868, width: 290, height: 380 },
    ],
    layout: {
      nodes: {
        advertising: { x: 364, y: 535, width: 72, height: 220 }, other_revenue: { x: 364, y: 955, width: 72, height: 10 }, revenue_by_product: { x: 675, y: 627, width: 72, height: 233 },
        united_states: { x: 986, y: 536, width: 72, height: 184 }, rest_of_world: { x: 986, y: 919, width: 72, height: 47 }, revenue: { x: 1298, y: 627, width: 72, height: 233 },
        gross_profit: { x: 1609, y: 537, width: 72, height: 213 }, cost_of_revenue: { x: 1609, y: 943, width: 72, height: 21 }, operating_profit: { x: 1921, y: 459, width: 72, height: 66 },
        operating_expenses: { x: 1921, y: 699, width: 72, height: 147 }, other_income: { x: 2113, y: 498, width: 72, height: 7 }, net_profit: { x: 2232, y: 355, width: 72, height: 73 }, tax: { x: 2232, y: 662, width: 72, height: 3 },
        rnd: { x: 2232, y: 775, width: 72, height: 67 }, sm: { x: 2232, y: 973, width: 72, height: 57 }, ga: { x: 2232, y: 1173, width: 72, height: 22 },
      },
      labels,
    },
    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 762, notes: ['+64% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 43, notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 805, notes: ['+61% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'united_states', col: 2, order: 0, type: 'source', label: 'United States', value: 638, notes: ['+56% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'rest_of_world', col: 2, order: 1, type: 'source', label: 'Rest of World', value: 167, notes: ['+84% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 805, notes: ['+61% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 735, notes: ['91% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 70, valueText: '($70M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 232, notes: ['29% margin', '+15pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 503, valueText: '($503M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 6, order: 0, type: 'profit', label: 'Other', value: 25, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 253, notes: ['31% margin', '+14pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 5, valueText: '($5M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 2, type: 'cost', label: 'Research & development', value: 231, valueText: '($231M)', notes: ['29% of revenue', '(11pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 3, type: 'cost', label: 'Sales & marketing', value: 196, valueText: '($196M)', notes: ['24% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 4, type: 'cost', label: 'General & admin', value: 76, valueText: '($76M)', notes: ['9% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'advertising', target: 'revenue_by_product', value: 762, width: 220, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue_by_product', value: 43, sourceWidth: 10, targetWidth: 13, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue_by_product', target: 'united_states', value: 638, width: 184, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue_by_product', target: 'rest_of_world', value: 167, sourceWidth: 49, targetWidth: 47, sourceOrder: 1, targetOrder: 0 },
      { source: 'united_states', target: 'revenue', value: 638, width: 184, sourceOrder: 0, targetOrder: 0 },
      { source: 'rest_of_world', target: 'revenue', value: 167, sourceWidth: 47, targetWidth: 49, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 735, sourceWidth: 213, targetWidth: 213, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 70, sourceWidth: 20, targetWidth: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 232, width: 66, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 503, width: 147, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 227, sourceWidth: 64, targetWidth: 64, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 5, sourceWidth: 2, targetWidth: 3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 25, sourceWidth: 7, targetWidth: 9, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 231, width: 67, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 196, width: 57, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 76, sourceWidth: 23, targetWidth: 22, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Reddit · 2026 财年第二季度',
        meta: { title: 'Reddit 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleSize: 112, titleTextLength: 1680 },
        annotationsSvg: annotations(true),
        nodes: {
          advertising: { label: '广告', notes: ['同比 +64%'] }, other_revenue: { label: '其他', notes: ['同比 +24%'] }, revenue_by_product: { label: '收入', notes: ['同比 +61%'] }, united_states: { label: '美国', notes: ['同比 +56%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +84%'] }, revenue: { label: '收入', notes: ['同比 +61%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 91%', '同比 +0 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 +15 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +14 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 29%', '同比 (11 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 24%', '同比 +0 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 9%', '同比 (4 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

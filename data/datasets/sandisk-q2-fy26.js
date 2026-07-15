/* ====================================================================
 * Sandisk - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/sandisk-q2-fy26.png as a fixed
 * d3-sankey layout. Geometry is measured on its 2667x1500 source image.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GRAY_LINK = '#c6c6c6';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sandisk-q2-fy26',
    name: 'Sandisk · Q2 FY26',
    company: 'Sandisk',
    meta: {
      company: 'Sandisk',
      title: 'Sandisk Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/sandisk-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2201,
      periodX: 1840,
      periodY: 1168,
      periodNoteY: 1212,
      periodAnchor: 'middle',
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 10 },
    },
    rasterAnnotations: [
      { href: 'data/assets/raster-annotations/sandisk/company-wordmark.png', x: 550, y: 275, width: 680, height: 100 },
      { href: 'data/assets/raster-annotations/sandisk/datacenter-storage-cluster.png', x: 190, y: 318, width: 130, height: 118 },
      { href: 'data/assets/raster-annotations/sandisk/edge-storage-cluster.png', x: 177, y: 720, width: 160, height: 145 },
      { href: 'data/assets/raster-annotations/sandisk/consumer-storage-cluster.png', x: 190, y: 1096, width: 130, height: 104 },
    ],
    layout: {
      scale: 0.1544,
      nodes: {
        datacenter: { x: 405, y: 442, width: 71, height: 68 },
        edge: { x: 405, y: 703, width: 71, height: 259 },
        consumer: { x: 405, y: 1150, width: 71, height: 139 },
        revenue: { x: 873, y: 655, width: 71, height: 467 },
        gross_profit: { x: 1339, y: 539, width: 72, height: 237 },
        cost_of_revenue: { x: 1339, y: 986, width: 72, height: 229 },
        operating_profit: { x: 1806, y: 423, width: 72, height: 165 },
        operating_expenses: { x: 1806, y: 808, width: 72, height: 73 },
        net_profit: { x: 2273, y: 310, width: 72, height: 124 },
        tax: { x: 2273, y: 630, width: 72, height: 21 },
        other_non_operating: { x: 2273, y: 758, width: 72, height: 20 },
        rnd: { x: 2273, y: 920, width: 72, height: 50 },
        sga: { x: 2273, y: 1119, width: 72, height: 21 },
        other_opex: { x: 2273, y: 1301, width: 72, height: 1 },
      },
      labels: {
        datacenter: { blocks: [
          { x: 438, top: 344, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '+76% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 259, top: 452, anchor: 'middle', lineGap: 8, lines: [{ text: 'Datacenter', size: 38, weight: 800, color: BLACK }] },
        ] },
        edge: { blocks: [
          { x: 438, top: 605, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '+63% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 263, top: 881, anchor: 'middle', lineGap: 8, lines: [{ text: 'Edge', size: 38, weight: 800, color: BLACK }] },
        ] },
        consumer: { blocks: [
          { x: 438, top: 1052, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '+52% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 258, top: 1230, anchor: 'middle', lineGap: 8, lines: [{ text: 'Consumer', size: 38, weight: 800, color: BLACK }] },
        ] },
        revenue: { blocks: [{ x: 910, top: 511, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 44, weight: 800, color: BLACK },
          { text: '$value', size: 40, weight: 400, color: BLACK },
          { text: '+61% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1374, top: 357, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
          { text: '51% margin', size: 28, weight: 400, color: NOTE },
          { text: '+19pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1376, top: 1239, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Cost of', size: 34, weight: 800 },
          { text: 'revenue', size: 34, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1838, top: 242, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
          { text: '35% margin', size: 28, weight: 400, color: NOTE },
          { text: '+25pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1838, top: 901, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Operating', size: 34, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2461, top: 292, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
          { text: '27% margin', size: 28, weight: 400, color: NOTE },
          { text: '+21pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2461, top: 604, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Tax', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
        other_non_operating: { blocks: [{ x: 2461, top: 733, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Other', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2461, top: 914, anchor: 'middle', lineGap: 5, lines: [
          { text: 'R&D', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
        sga: { blocks: [{ x: 2461, top: 1099, anchor: 'middle', lineGap: 5, lines: [
          { text: 'SG&A', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
        other_opex: { blocks: [{ x: 2458, top: 1266, anchor: 'middle', lineGap: 5, lines: [
          { text: 'Other', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 },
        ] }] },
      },
    },
    nodes: [
      { id: 'datacenter', col: 0, order: 0, type: 'source', label: 'Datacenter', value: 440, notes: ['+76% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'edge', col: 0, order: 1, type: 'source', label: 'Edge', value: 1678, valueText: '$1,678M', notes: ['+63% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'consumer', col: 0, order: 2, type: 'source', label: 'Consumer', value: 907, notes: ['+52% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3025, valueText: '$3,025M', notes: ['+61% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1541, valueText: '$1,541M', notes: ['51% margin', '+19pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1484, valueText: '($1,484M)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1065, valueText: '$1,065M', notes: ['35% margin', '+25pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 476 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 803, notes: ['27% margin', '+21pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 134 },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 128 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 327 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 139 },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 10 },
    ],
    links: [
      { source: 'datacenter', target: 'revenue', value: 440, width: 68, targetOrder: 0 },
      { source: 'edge', target: 'revenue', value: 1678, width: 259, targetOrder: 1 },
      { source: 'consumer', target: 'revenue', value: 907, width: 139, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1541, width: 238, targetWidth: 236, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1484, width: 229, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1065, width: 164, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 476, width: 73, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 803, width: 124, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 134, width: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_non_operating', value: 128, width: 20, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 327, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 139, width: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 10, width: 1, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Sandisk · 2026 财年第二季度',
        meta: { title: 'Sandisk 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2025 年 12 月', titleTextLength: 1560 },
        nodes: {
          datacenter: { label: '数据中心', notes: ['同比 +76%'] }, edge: { label: '边缘', notes: ['同比 +63%'] }, consumer: { label: '消费级', notes: ['同比 +52%'] }, revenue: { label: '收入', notes: ['同比 +61%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +19 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +25 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 +21 个百分点'] }, tax: { label: '税费' }, other_non_operating: { label: '其他' }, rnd: { label: '研发' }, sga: { label: '销售及行政' }, other_opex: { label: '其他' },
        },
        layout: { labels: {
          datacenter: { blocks: [
            { x: 438, top: 344, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400, color: BLACK }, { text: '同比 +76%', size: 28, weight: 400, color: NOTE }] },
            { x: 259, top: 452, anchor: 'middle', lineGap: 8, lines: [{ text: '数据中心', size: 38, weight: 800, color: BLACK }] },
          ] },
          edge: { blocks: [
            { x: 438, top: 605, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400, color: BLACK }, { text: '同比 +63%', size: 28, weight: 400, color: NOTE }] },
            { x: 263, top: 881, anchor: 'middle', lineGap: 8, lines: [{ text: '边缘', size: 38, weight: 800, color: BLACK }] },
          ] },
          consumer: { blocks: [
            { x: 438, top: 1052, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400, color: BLACK }, { text: '同比 +52%', size: 28, weight: 400, color: NOTE }] },
            { x: 258, top: 1230, anchor: 'middle', lineGap: 8, lines: [{ text: '消费级', size: 38, weight: 800, color: BLACK }] },
          ] },
          revenue: { blocks: [{ x: 910, top: 511, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 44, weight: 800, color: BLACK }, { text: '$value', size: 40, weight: 400, color: BLACK }, { text: '同比 +61%', size: 28, weight: 400, color: NOTE }] }] },
          gross_profit: { blocks: [{ x: 1374, top: 357, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 42, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 51%', size: 28, weight: 400, color: NOTE }, { text: '同比 +19 个百分点', size: 26, weight: 400, color: NOTE }] }] },
          cost_of_revenue: { blocks: [{ x: 1376, top: 1239, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 34, weight: 800 }, { text: '成本', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
          operating_profit: { blocks: [{ x: 1838, top: 242, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 42, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 35%', size: 28, weight: 400, color: NOTE }, { text: '同比 +25 个百分点', size: 26, weight: 400, color: NOTE }] }] },
          operating_expenses: { blocks: [{ x: 1838, top: 901, anchor: 'middle', lineGap: 7, lines: [{ text: '营业', size: 34, weight: 800, color: RED_LABEL }, { text: '费用', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
          net_profit: { blocks: [{ x: 2461, top: 296, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 42, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 27%', size: 24, weight: 400, color: NOTE }, { text: '同比 +21 个百分点', size: 24, weight: 400, color: NOTE }] }] },
          tax: { blocks: [{ x: 2461, top: 604, anchor: 'middle', lineGap: 5, lines: [{ text: '税费', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
          other_non_operating: { blocks: [{ x: 2461, top: 733, anchor: 'middle', lineGap: 5, lines: [{ text: '其他', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
          rnd: { blocks: [{ x: 2461, top: 914, anchor: 'middle', lineGap: 5, lines: [{ text: '研发', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
          sga: { blocks: [{ x: 2461, top: 1099, anchor: 'middle', lineGap: 5, lines: [{ text: '销售及行政', size: 30, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
          other_opex: { blocks: [{ x: 2458, top: 1266, anchor: 'middle', lineGap: 5, lines: [{ text: '其他', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        } },
      },
    },
  });
})();

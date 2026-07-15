/* ====================================================================
 * NetEase - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/netease-q3-fy25.png as a fixed
 * d3-sankey layout reusing the validated NetEase icon clusters.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const SOURCE_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LABEL = '#5e5e5e';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'netease-q3-fy25',
    name: 'NetEase · Q3 FY25',
    company: 'NetEase',
    meta: {
      company: 'NetEase',
      title: 'NetEase Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/netease-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2220,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/netease/company-wordmark.png', x: 684, y: 248, width: 538, height: 130 },
      { key: 'business-games-cluster', href: 'data/assets/raster-annotations/netease/business-games-cluster.png', x: 1, y: 374, width: 468, height: 337 },
      { key: 'business-cloud-music', href: 'data/assets/raster-annotations/netease/business-cloud-music.png', x: 146, y: 793, width: 255, height: 122 },
      { key: 'business-youdao-wordmark', href: 'data/assets/raster-annotations/netease/business-youdao-wordmark.png', x: 124, y: 968, width: 314, height: 100 },
      { key: 'business-innovative-cluster', href: 'data/assets/raster-annotations/netease/business-innovative-cluster.png', x: 53, y: 1155, width: 153, height: 142 },
    ],
    layout: {
      scale: 81,
      nodes: {
        games: { x: 490, y: 491, width: 72, height: 259 },
        cloud_music: { x: 490, y: 895, width: 72, height: 22 },
        youdao: { x: 490, y: 1066, width: 72, height: 18 },
        innovative_businesses: { x: 490, y: 1220, width: 72, height: 18 },
        revenue: { x: 957, y: 680, width: 72, height: 314 },
        gross_profit: { x: 1424, y: 582, width: 72, height: 202 },
        cost_of_revenue: { x: 1424, y: 1010, width: 72, height: 112 },
        operating_profit: { x: 1892, y: 469, width: 72, height: 91 },
        operating_expenses: { x: 1892, y: 774, width: 72, height: 113 },
        other: { x: 2242, y: 488, width: 72, height: 22 },
        net_profit: { x: 2358, y: 361, width: 72, height: 99 },
        tax: { x: 2358, y: 683, width: 72, height: 13 },
        rnd: { x: 2358, y: 890, width: 72, height: 50 },
        sm: { x: 2358, y: 1085, width: 72, height: 50 },
        ga: { x: 2358, y: 1275, width: 72, height: 13 },
      },
      labels: {
        games: { blocks: [
          { x: 474, top: 392, anchor: 'start', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 147, top: 714, anchor: 'start', lines: [{ text: '70% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        cloud_music: { blocks: [
          { x: 474, top: 797, anchor: 'start', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '(2%) Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 147, top: 915, anchor: 'start', lines: [{ text: '36% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        youdao: { blocks: [
          { x: 474, top: 968, anchor: 'start', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 147, top: 1073, anchor: 'start', lines: [{ text: '43% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        innovative_businesses: { blocks: [
          { x: 474, top: 1125, anchor: 'start', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '(19%) Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 217, top: 1140, anchor: 'start', lineGap: 12, lines: [{ text: 'Innovative', size: 40, weight: 800, color: GRAY_LABEL }, { text: 'Businesses', size: 40, weight: 800, color: GRAY_LABEL }, { text: '& Others', size: 40, weight: 800, color: GRAY_LABEL }] },
          { x: 147, top: 1304, anchor: 'start', lines: [{ text: '42% gross margin', size: 29, weight: 400, color: NOTE }] },
        ] },
        revenue: { blocks: [{ x: 992, top: 530, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1460, top: 401, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 42, weight: 400 }, { text: '64% margin', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1458, top: 1143, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 35, weight: 800 }, { text: 'revenue', size: 35, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1928, top: 280, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '28% margin', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1926, top: 904, anchor: 'middle', lineGap: 19, lines: [{ text: 'Operating', size: 35, weight: 800 }, { text: 'expenses', size: 35, weight: 800 }] }, { x: 1926, top: 999, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }] }] },
        other: { blocks: [{ x: 2280, top: 528, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2534, top: 330, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '31% margin', size: 29, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: 2526, top: 655, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2539, top: 875, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '16% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        sm: { blocks: [{ x: 2539, top: 1057, anchor: 'middle', lineGap: 8, lines: [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '16% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: 2524, top: 1239, anchor: 'middle', lineGap: 8, lines: [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '4% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'games', col: 0, order: 0, type: 'source', label: 'Games and related value-added services', value: 3.3, notes: ['+12% Y/Y', '70% gross margin'], color: BLACK, labelColor: BLACK, linkTint: SOURCE_LINK },
      { id: 'cloud_music', col: 0, order: 1, type: 'source', label: 'Cloud Music', value: 0.3, notes: ['(2%) Y/Y', '36% gross margin'], color: BLACK, labelColor: GRAY_LABEL, linkTint: SOURCE_LINK },
      { id: 'youdao', col: 0, order: 2, type: 'source', label: 'Youdao', value: 0.2, notes: ['+4% Y/Y', '43% gross margin'], color: BLACK, labelColor: GRAY_LABEL, linkTint: SOURCE_LINK },
      { id: 'innovative_businesses', col: 0, order: 3, type: 'source', label: ['Innovative', 'Businesses', '& Others'], value: 0.2, notes: ['(19%) Y/Y', '42% gross margin'], color: BLACK, labelColor: GRAY_LABEL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.0, valueText: '$4.0B', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.6, notes: ['64% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.1, notes: ['28% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.2, notes: ['31% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.6, notes: ['16% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.6, notes: ['16% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.2, notes: ['4% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'games', target: 'revenue', value: 3.3, width: 259, targetWidth: 256, targetOrder: 0 },
      { source: 'cloud_music', target: 'revenue', value: 0.3, width: 22, targetOrder: 1 },
      { source: 'youdao', target: 'revenue', value: 0.2, width: 18, targetOrder: 2 },
      { source: 'innovative_businesses', target: 'revenue', value: 0.2, width: 18, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.6, width: 202, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.4, width: 112, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.1, width: 90, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, width: 112, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.9, width: 74, targetWidth: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 17, targetWidth: 13, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.3, width: 22, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.6, width: 50, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.6, width: 50, targetWidth: 48, y1: 1111, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 13, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'NetEase · 2025 财年第三季度',
        meta: { title: 'NetEase 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月' },
        nodes: {
          games: { label: '游戏及相关增值服务', notes: ['同比 +12%', '毛利率 70%'] }, cloud_music: { label: '云音乐', notes: ['同比 (2%)', '毛利率 36%'] }, youdao: { label: '有道', notes: ['同比 +4%', '毛利率 43%'] }, innovative_businesses: { label: '创新业务及其他', notes: ['同比 (19%)', '毛利率 42%'] }, revenue: { label: '收入', notes: ['同比 +8%'] }, gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +1 个百分点'] }, operating_expenses: { label: '运营费用' }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +5 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 16%', '同比 (1 个百分点)'] }, sm: { label: '销售与营销', notes: ['占收入 16%', '同比 +1 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 4%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            innovative_businesses: { blocks: [
              { x: 474, top: 1125, anchor: 'start', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 (19%)', size: 29, weight: 400, color: NOTE }] },
              { x: 217, top: 1160, anchor: 'start', lineGap: 12, lines: [{ text: '创新业务', size: 40, weight: 800, color: GRAY_LABEL }, { text: '及其他', size: 40, weight: 800, color: GRAY_LABEL }] },
              { x: 147, top: 1304, anchor: 'start', lines: [{ text: '毛利率 42%', size: 29, weight: 400, color: NOTE }] },
            ] },
            net_profit: { blocks: [{ x: 2545, top: 330, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 31%', size: 28, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            rnd: { blocks: [{ x: 2546, top: 875, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 16%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            sm: { blocks: [{ x: 2545, top: 1057, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 16%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
            ga: { blocks: [{ x: 2546, top: 1239, anchor: 'middle', lineGap: 8, lines: [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 4%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();

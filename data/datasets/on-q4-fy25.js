/* ====================================================================
 * On - Q4 FY25 income statement (CHF M)
 * Reconstructed from input/processed/on-q4-fy25.png as a fixed d3-sankey
 * layout. Validated On assets are reused from the company asset registry;
 * publisher attribution is intentionally not recreated.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GREY_LINK = '#858585';

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    ...(options.color ? { color: options.color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const labelsEn = {
    shoes: { blocks: [
      block(435, 476, [line('$value', 40), line('+21% Y/Y', 29, { color: NOTE })]),
      block(274, 703, [line('Shoes', 40, { weight: 800 })]),
    ] },
    apparel: { blocks: [
      block(435, 978, [line('$value', 40), line('+38% Y/Y', 29, { color: NOTE })]),
      block(255, 1059, [line('Apparel', 40, { weight: 800 })]),
    ] },
    accessories: { blocks: [
      block(435, 1175, [line('$value', 40), line('+119% Y/Y', 29, { color: NOTE })]),
      block(218, 1244, [line('Accessories', 40, { weight: 800 })]),
    ] },
    revenue_by_product: { blocks: [
      block(748, 518, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+23% Y/Y', 29, { color: NOTE })]),
    ] },
    wholesale: { blocks: [
      block(1059, 421, [line('Wholesale', 40, { weight: 800 }), line('$value', 39), line('+23% Y/Y', 29, { color: NOTE })]),
    ] },
    direct_to_consumer: { blocks: [
      block(1059, 1116, [line('Direct To Consumer', 40, { weight: 800 }), line('$value', 39), line('+22% Y/Y', 29, { color: NOTE })]),
    ] },
    revenue: { blocks: [
      block(1370, 521, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+23% Y/Y', 29, { color: NOTE })]),
    ] },
    gross_profit: { blocks: [
      block(1681, 383, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('64% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })]),
    ] },
    cost_of_sales: { blocks: [
      block(1681, 1117, [line('Cost of sales', 40, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })]),
    ] },
    operating_profit: { blocks: [
      block(1993, 302, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('11% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })]),
    ] },
    operating_expenses: { blocks: [
      block(1993, 896, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('SG&A', 40, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })]),
    ] },
    net_profit: { blocks: [
      block(2370, 357, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('9% margin', 29, { color: NOTE }), line('(5pp) Y/Y', 29, { color: NOTE })], { anchor: 'start' }),
    ] },
    other: { blocks: [
      block(2460, 610, [line('Other', 35, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })]),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, texts) => labelsZh[id].blocks[0].lines.forEach((item, index) => { item.text = texts[index]; });
  setLines('shoes', ['$value', '同比 +21%']);
  labelsZh.shoes.blocks[1].lines[0].text = '鞋类';
  setLines('apparel', ['$value', '同比 +38%']);
  labelsZh.apparel.blocks[1].lines[0].text = '服装';
  setLines('accessories', ['$value', '同比 +119%']);
  labelsZh.accessories.blocks[1].lines[0].text = '配饰';
  setLines('revenue_by_product', ['收入', '$value', '同比 +23%']);
  setLines('wholesale', ['批发', '$value', '同比 +23%']);
  setLines('direct_to_consumer', ['直营消费者业务', '$value', '同比 +22%']);
  labelsZh.direct_to_consumer.blocks[0].lines[0].size = 36;
  setLines('revenue', ['收入', '$value', '同比 +23%']);
  setLines('gross_profit', ['毛利润', '$value', '利润率 64%', '同比 +2 个百分点']);
  setLines('cost_of_sales', ['销售成本', '$value']);
  setLines('operating_profit', ['营业利润', '$value', '利润率 11%', '同比 +2 个百分点']);
  setLines('operating_expenses', ['运营', '费用', '销售及管理费用', '$value']);
  labelsZh.operating_expenses.blocks[0].lines[2].size = 34;
  setLines('net_profit', ['净利润', '$value', '利润率 9%', '同比下降 5 个百分点']);
  setLines('other', ['其他', '$value']);

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="128" y="302" fill="${TITLE}" font-size="42" font-weight="800">in CHF (₣)</text>
    </g>`;
  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="128" y="302" fill="${TITLE}" font-size="38" font-weight="800">单位：瑞士法郎</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'on-q4-fy25',
    name: 'On · Q4 FY25',
    company: 'On',
    meta: {
      company: 'On',
      title: 'On Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'CHF',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/on-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1910,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      interfaceAudit: { mode: 'error' },
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
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      { key: 'on-company-logo', href: 'data/assets/raster-annotations/on/company-logo.png', x: 1280, y: 220, width: 179, height: 291 },
      { key: 'on-shoes-product', href: 'data/assets/raster-annotations/on/shoes-product.png', x: 134, y: 514, width: 236, height: 180 },
      { key: 'on-apparel-product', href: 'data/assets/raster-annotations/on/apparel-product.png', x: 165, y: 861, width: 173, height: 190 },
      { key: 'on-accessories-product', href: 'data/assets/raster-annotations/on/accessories-product.png', x: 128, y: 1124, width: 225, height: 110 },
    ],
    layout: {
      scale: 1,
      nodes: {
        shoes: { x: 400, y: 566, width: 71, height: 299 },
        apparel: { x: 400, y: 1070, width: 71, height: 18 },
        accessories: { x: 400, y: 1267, width: 71, height: 4 },
        revenue_by_product: { x: 711, y: 663, width: 71, height: 324 },
        wholesale: { x: 1022, y: 569, width: 72, height: 165 },
        direct_to_consumer: { x: 1022, y: 937, width: 72, height: 155 },
        revenue: { x: 1334, y: 663, width: 71, height: 324 },
        gross_profit: { x: 1643, y: 565, width: 71, height: 206 },
        cost_of_sales: { x: 1640, y: 979, width: 72, height: 115 },
        operating_profit: { x: 1957, y: 484, width: 71, height: 35 },
        operating_expenses: { x: 1957, y: 704, width: 71, height: 170 },
        net_profit: { x: 2268, y: 400, width: 71, height: 27 },
        other: { x: 2268, y: 643, width: 71, height: 3 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'shoes', col: 0, order: 0, type: 'source', label: 'Shoes', value: 687, valueText: '₣687M', notes: ['+21% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 45, valueText: '₣45M', notes: ['+38% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'accessories', col: 0, order: 2, type: 'source', label: 'Accessories', value: 11, valueText: '₣11M', notes: ['+119% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 744, valueText: '₣744M', notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'wholesale', col: 2, order: 0, type: 'hub', label: 'Wholesale', value: 383, valueText: '₣383M', notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'direct_to_consumer', col: 2, order: 1, type: 'hub', label: 'Direct To Consumer', value: 361, valueText: '₣361M', notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 744, valueText: '₣744M', notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 475, valueText: '₣475M', notes: ['64% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 269, valueText: '(₣269M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 82, valueText: '₣82M', notes: ['11% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses', 'SG&A'], value: 393, valueText: '(₣393M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 69, valueText: '₣69M', notes: ['9% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 14, valueText: '(₣14M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'shoes', target: 'revenue_by_product', value: 687, sourceWidth: 299, targetWidth: 299, y0: 715.5, y1: 812.5, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'apparel', target: 'revenue_by_product', value: 45, sourceWidth: 18, targetWidth: 20, y0: 1079, y1: 972, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'accessories', target: 'revenue_by_product', value: 11, sourceWidth: 4, targetWidth: 5, y0: 1269, y1: 984.5, sourceOrder: 0, targetOrder: 2, linkTint: GREY_LINK },
      { source: 'revenue_by_product', target: 'wholesale', value: 383, sourceWidth: 167, targetWidth: 165, y0: 746.5, y1: 651.5, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'revenue_by_product', target: 'direct_to_consumer', value: 361, sourceWidth: 157, targetWidth: 155, y0: 908.5, y1: 1014.5, sourceOrder: 1, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'wholesale', target: 'revenue', value: 383, sourceWidth: 165, targetWidth: 166, y0: 651.5, y1: 746, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'direct_to_consumer', target: 'revenue', value: 361, sourceWidth: 155, targetWidth: 158, y0: 1014.5, y1: 908, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 475, sourceWidth: 206, targetWidth: 206, y0: 766, y1: 668, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 269, sourceWidth: 118, targetWidth: 115, y0: 928, y1: 1036.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 82, sourceWidth: 34, targetWidth: 35, y0: 581.5, y1: 501.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 393, sourceWidth: 172, targetWidth: 170, y0: 685, y1: 789, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 69, sourceWidth: 29, targetWidth: 27, y0: 498.5, y1: 413.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 14, sourceWidth: 6, targetWidth: 3, y0: 516, y1: 644.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '昂跑 · 2025 财年第四季度',
        meta: {
          title: '昂跑 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1820,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          shoes: { label: '鞋类', notes: ['同比 +21%'] },
          apparel: { label: '服装', notes: ['同比 +38%'] },
          accessories: { label: '配饰', notes: ['同比 +119%'] },
          revenue_by_product: { label: '收入', notes: ['同比 +23%'] },
          wholesale: { label: '批发', notes: ['同比 +23%'] },
          direct_to_consumer: { label: '直营消费者业务', notes: ['同比 +22%'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用（销售及管理费用）' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比下降 5 个百分点'] },
          other: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

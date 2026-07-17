/* ====================================================================
 * On - Q3 FY25 income statement (CHF M)
 * Reconstructed from input/processed/on-q3-fy25.png as a fixed d3-sankey
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
      block(435, 500, [line('$value', 40), line('+21% Y/Y', 29, { color: NOTE })]),
      block(244, 794, [line('Shoes', 40, { weight: 800 })]),
    ] },
    apparel: { blocks: [
      block(435, 974, [line('$value', 40), line('+87% Y/Y', 29, { color: NOTE })]),
      block(244, 1062, [line('Apparel', 40, { weight: 800 })]),
    ] },
    accessories: { blocks: [
      block(435, 1162, [line('$value', 40), line('+145% Y/Y', 29, { color: NOTE })]),
      block(209, 1243, [line('Accessories', 40, { weight: 800 })]),
    ] },
    revenue_by_product: { blocks: [
      block(748, 537, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+25% Y/Y', 29, { color: NOTE })]),
    ] },
    wholesale: { blocks: [
      block(1059, 452, [line('Wholesale', 40, { weight: 800 }), line('$value', 39), line('+23% Y/Y', 29, { color: NOTE })]),
    ] },
    direct_to_consumer: { blocks: [
      block(1059, 1077, [line('Direct To Consumer', 40, { weight: 800 }), line('$value', 39), line('+28% Y/Y', 29, { color: NOTE })]),
    ] },
    revenue: { blocks: [
      block(1370, 537, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+25% Y/Y', 29, { color: NOTE })]),
    ] },
    gross_profit: { blocks: [
      block(1681, 415, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('66% margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })]),
    ] },
    cost_of_sales: { blocks: [
      block(1681, 1065, [line('Cost of sales', 40, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })]),
    ] },
    operating_profit: { blocks: [
      block(1993, 350, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('16% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })]),
    ] },
    operating_expenses: { blocks: [
      block(1993, 873, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })]),
    ] },
    net_profit: { blocks: [
      block(2370, 418, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('15% margin', 29, { color: NOTE }), line('+10pp Y/Y', 29, { color: NOTE })], { anchor: 'start' }),
    ] },
    other: { blocks: [
      block(2461, 657, [line('Other', 35, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })]),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, texts) => labelsZh[id].blocks[0].lines.forEach((item, index) => { item.text = texts[index]; });
  setLines('shoes', ['$value', '同比 +21%']);
  labelsZh.shoes.blocks[1].lines[0].text = '鞋类';
  setLines('apparel', ['$value', '同比 +87%']);
  labelsZh.apparel.blocks[1].lines[0].text = '服装';
  setLines('accessories', ['$value', '同比 +145%']);
  labelsZh.accessories.blocks[1].lines[0].text = '配饰';
  setLines('revenue_by_product', ['收入', '$value', '同比 +25%']);
  setLines('wholesale', ['批发', '$value', '同比 +23%']);
  setLines('direct_to_consumer', ['直营消费者业务', '$value', '同比 +28%']);
  labelsZh.direct_to_consumer.blocks[0].lines[0].size = 36;
  setLines('revenue', ['收入', '$value', '同比 +25%']);
  setLines('gross_profit', ['毛利润', '$value', '利润率 66%', '同比 +5 个百分点']);
  setLines('cost_of_sales', ['销售成本', '$value']);
  setLines('operating_profit', ['营业利润', '$value', '利润率 16%', '同比 +4 个百分点']);
  setLines('operating_expenses', ['运营', '费用', '$value']);
  setLines('net_profit', ['净利润', '$value', '利润率 15%', '同比 +10 个百分点']);
  setLines('other', ['其他', '$value']);

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="112" y="297" fill="${TITLE}" font-size="42" font-weight="800">in CHF (₣)</text>
    </g>`;
  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="112" y="297" fill="${TITLE}" font-size="38" font-weight="800">单位：瑞士法郎</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'on-q3-fy25',
    name: 'On · Q3 FY25',
    company: 'On',
    meta: {
      company: 'On',
      title: 'On Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: 'CHF',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/on-q3-fy25.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error', fullFaceIds: ['revenue_by_product:left', 'revenue_by_product:right', 'revenue:left', 'revenue:right'] },
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
      { key: 'on-shoes-product', href: 'data/assets/raster-annotations/on/shoes-product.png', x: 134, y: 590, width: 236, height: 180 },
      { key: 'on-apparel-product', href: 'data/assets/raster-annotations/on/apparel-product.png', x: 165, y: 861, width: 173, height: 190 },
      { key: 'on-accessories-product', href: 'data/assets/raster-annotations/on/accessories-product.png', x: 128, y: 1125, width: 225, height: 110 },
    ],
    layout: {
      scale: 1,
      nodes: {
        shoes: { x: 399, y: 597, width: 72, height: 249 },
        apparel: { x: 399, y: 1068, width: 72, height: 17 },
        accessories: { x: 399, y: 1264, width: 72, height: 4 },
        revenue_by_product: { x: 712, y: 680, width: 72, height: 270 },
        wholesale: { x: 1023, y: 598, width: 72, height: 163 },
        direct_to_consumer: { x: 1023, y: 950, width: 72, height: 107 },
        revenue: { x: 1334, y: 682, width: 72, height: 270 },
        gross_profit: { x: 1645, y: 597, width: 72, height: 178 },
        cost_of_sales: { x: 1645, y: 960, width: 72, height: 93 },
        operating_profit: { x: 1957, y: 530, width: 72, height: 43 },
        operating_expenses: { x: 1957, y: 725, width: 72, height: 135 },
        net_profit: { x: 2268, y: 448, width: 72, height: 40 },
        other: { x: 2268, y: 693, width: 72, height: 3 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'shoes', col: 0, order: 0, type: 'source', label: 'Shoes', value: 731, valueText: '₣731M', notes: ['+21% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 50, valueText: '₣50M', notes: ['+87% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'accessories', col: 0, order: 2, type: 'source', label: 'Accessories', value: 13, valueText: '₣13M', notes: ['+145% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 794, valueText: '₣794M', notes: ['+25% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'wholesale', col: 2, order: 0, type: 'hub', label: 'Wholesale', value: 480, valueText: '₣480M', notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'direct_to_consumer', col: 2, order: 1, type: 'hub', label: 'Direct To Consumer', value: 315, valueText: '₣315M', notes: ['+28% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 794, valueText: '₣794M', notes: ['+25% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 522, valueText: '₣522M', notes: ['66% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 272, valueText: '(₣272M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 125, valueText: '₣125M', notes: ['16% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 398, valueText: '(₣398M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 119, valueText: '₣119M', notes: ['15% margin', '+10pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 6, valueText: '(₣6M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'shoes', target: 'revenue_by_product', value: 731, width: 249, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'apparel', target: 'revenue_by_product', value: 50, width: 17, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'accessories', target: 'revenue_by_product', value: 13, width: 4, sourceOrder: 0, targetOrder: 2, linkTint: GREY_LINK },
      { source: 'revenue_by_product', target: 'wholesale', value: 480, width: 163, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'revenue_by_product', target: 'direct_to_consumer', value: 315, width: 107, sourceOrder: 1, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'wholesale', target: 'revenue', value: 480, width: 163, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'direct_to_consumer', target: 'revenue', value: 315, width: 107, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 522, sourceWidth: 178, targetWidth: 178, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 272, sourceWidth: 92, targetWidth: 93, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 125, width: 43, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 398, sourceWidth: 135, targetWidth: 135, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 119, sourceWidth: 40, targetWidth: 40, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 6, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '昂跑 · 2025 财年第三季度',
        meta: {
          title: '昂跑 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1820,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          shoes: { label: '鞋类', notes: ['同比 +21%'] },
          apparel: { label: '服装', notes: ['同比 +87%'] },
          accessories: { label: '配饰', notes: ['同比 +145%'] },
          revenue_by_product: { label: '收入', notes: ['同比 +25%'] },
          wholesale: { label: '批发', notes: ['同比 +23%'] },
          direct_to_consumer: { label: '直营消费者业务', notes: ['同比 +28%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 66%', '同比 +5 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +10 个百分点'] },
          other: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* ====================================================================
 * On - Q1 FY26 income statement (CHF M)
 * Reconstructed from input/processed/on-q1-fy26.png as a fixed d3-sankey
 * layout. The On mark and product images are validated runtime rasters;
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
  const RED = '#dd0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GREY_LINK = '#8a8a8a';

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
      block(435, 509, [line('$value', 40), line('+12% Y/Y', 29, { color: NOTE })]),
      block(244, 794, [line('Shoes', 40, { weight: 800 })]),
    ] },
    apparel: { blocks: [
      block(435, 976, [line('$value', 40), line('+45% Y/Y', 29, { color: NOTE })]),
      block(244, 1064, [line('Apparel', 40, { weight: 800 })]),
    ] },
    accessories: { blocks: [
      block(435, 1168, [line('$value', 40), line('+70% Y/Y', 29, { color: NOTE })]),
      block(244, 1248, [line('Accessories', 40, { weight: 800 })]),
    ] },
    revenue_by_product: { blocks: [
      block(748, 537, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+14% Y/Y', 29, { color: NOTE })]),
    ] },
    wholesale: { blocks: [
      block(1059, 459, [line('Wholesale', 40, { weight: 800 }), line('$value', 39), line('+13% Y/Y', 29, { color: NOTE })]),
    ] },
    direct_to_consumer: { blocks: [
      block(1059, 1051, [line('Direct To Consumer', 40, { weight: 800 }), line('$value', 39), line('+16% Y/Y', 29, { color: NOTE })]),
    ] },
    revenue: { blocks: [
      block(1370, 537, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+14% Y/Y', 29, { color: NOTE })]),
    ] },
    gross_profit: { blocks: [
      block(1681, 421, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('64% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })]),
    ] },
    cost_of_sales: { blocks: [
      block(1681, 1053, [line('Cost of sales', 40, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })]),
    ] },
    operating_profit: { blocks: [
      block(1993, 335, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('14% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })]),
    ] },
    operating_expenses: { blocks: [
      block(1993, 877, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })]),
    ] },
    net_profit: { blocks: [
      block(2370, 390, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('12% margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { anchor: 'start' }),
    ] },
    other: { blocks: [
      block(2429, 607, [line('Other', 35, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })]),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, texts) => labelsZh[id].blocks[0].lines.forEach((item, index) => { item.text = texts[index]; });
  setLines('shoes', ['$value', '同比 +12%']);
  labelsZh.shoes.blocks[1].lines[0].text = '鞋类';
  setLines('apparel', ['$value', '同比 +45%']);
  labelsZh.apparel.blocks[1].lines[0].text = '服装';
  setLines('accessories', ['$value', '同比 +70%']);
  labelsZh.accessories.blocks[1].lines[0].text = '配饰';
  setLines('revenue_by_product', ['收入', '$value', '同比 +14%']);
  setLines('wholesale', ['批发', '$value', '同比 +13%']);
  setLines('direct_to_consumer', ['直营消费者业务', '$value', '同比 +16%']);
  labelsZh.direct_to_consumer.blocks[0].lines[0].size = 36;
  setLines('revenue', ['收入', '$value', '同比 +14%']);
  setLines('gross_profit', ['毛利润', '$value', '利润率 64%', '同比 +4 个百分点']);
  setLines('cost_of_sales', ['销售成本', '$value']);
  setLines('operating_profit', ['营业利润', '$value', '利润率 14%', '同比 +4 个百分点']);
  setLines('operating_expenses', ['运营', '费用', '$value']);
  setLines('net_profit', ['净利润', '$value', '利润率 12%', '同比 +5 个百分点']);
  setLines('other', ['其他', '$value']);

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="112" y="297" fill="${TITLE}" font-size="42" font-weight="800">in CHF (₣)</text>
    </g>`;
  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="112" y="297" fill="${TITLE}" font-size="38" font-weight="800">单位：瑞士法郎</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'on-q1-fy26',
    name: 'On · Q1 FY26',
    company: 'On',
    meta: {
      company: 'On',
      title: 'On Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'CHF',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/on-q1-fy26.png', width: 2667, height: 1500 },
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
        shoes: { x: 399, y: 609, width: 72, height: 243 },
        apparel: { x: 399, y: 1073, width: 72, height: 18 },
        accessories: { x: 399, y: 1265, width: 72, height: 4 },
        revenue_by_product: { x: 712, y: 678, width: 72, height: 263 },
        wholesale: { x: 1023, y: 607, width: 72, height: 161 },
        direct_to_consumer: { x: 1023, y: 926, width: 72, height: 102 },
        revenue: { x: 1334, y: 678, width: 72, height: 263 },
        gross_profit: { x: 1645, y: 603, width: 72, height: 169 },
        cost_of_sales: { x: 1645, y: 930, width: 72, height: 94 },
        operating_profit: { x: 1957, y: 514, width: 72, height: 37 },
        operating_expenses: { x: 1957, y: 721, width: 72, height: 132 },
        net_profit: { x: 2268, y: 424, width: 72, height: 33 },
        other: { x: 2268, y: 642, width: 72, height: 4 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'shoes', col: 0, order: 0, type: 'source', label: 'Shoes', value: 764, valueText: '₣764M', notes: ['+12% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 55, valueText: '₣55M', notes: ['+45% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'accessories', col: 0, order: 2, type: 'source', label: 'Accessories', value: 13, valueText: '₣13M', notes: ['+70% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 832, valueText: '₣832M', notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'wholesale', col: 2, order: 0, type: 'hub', label: 'Wholesale', value: 510, valueText: '₣510M', notes: ['+13% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'direct_to_consumer', col: 2, order: 1, type: 'hub', label: 'Direct To Consumer', value: 322, valueText: '₣322M', notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 832, valueText: '₣832M', notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 534, valueText: '₣534M', notes: ['64% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 298, valueText: '(₣298M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 117, valueText: '₣117M', notes: ['14% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 417, valueText: '(₣417M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 103, valueText: '₣103M', notes: ['12% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 14, valueText: '(₣14M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'shoes', target: 'revenue_by_product', value: 764, width: 243, targetWidth: 241, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'apparel', target: 'revenue_by_product', value: 55, width: 18, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'accessories', target: 'revenue_by_product', value: 13, width: 4, sourceOrder: 0, targetOrder: 2, linkTint: GREY_LINK },
      { source: 'revenue_by_product', target: 'wholesale', value: 510, width: 161, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'revenue_by_product', target: 'direct_to_consumer', value: 322, width: 102, sourceOrder: 1, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'wholesale', target: 'revenue', value: 510, width: 161, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'direct_to_consumer', target: 'revenue', value: 322, width: 102, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 534, width: 169, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 298, width: 94, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 117, width: 37, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 417, width: 132, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 103, width: 33, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 14, width: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '昂跑 · 2026 财年第一季度',
        meta: {
          title: '昂跑 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1820,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          shoes: { label: '鞋类', notes: ['同比 +12%'] },
          apparel: { label: '服装', notes: ['同比 +45%'] },
          accessories: { label: '配饰', notes: ['同比 +70%'] },
          revenue_by_product: { label: '收入', notes: ['同比 +14%'] },
          wholesale: { label: '批发', notes: ['同比 +13%'] },
          direct_to_consumer: { label: '直营消费者业务', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 +4 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          other: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

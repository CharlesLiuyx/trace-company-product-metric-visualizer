/* ====================================================================
 * Block - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/block-q1-fy26.png as a measured
 * fixed d3-Sankey layout. Reuses Block's validated FY25 icon assets.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const OTHER_NODE = '#e58bca';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_X = 2493;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 10, lines, ...options });

  const labelsEn = {
    commerce_enablement: { blocks: [
      block(470, 407, [line('$value', 39), line('+14% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(289, 546, [line('Commerce', 40, 800), line('Enablement', 40, 800)], { lineGap: 13 }),
      block(289, 652, [line('55% gross margin', 29, 400, NOTE)]),
    ] },
    financial_solutions: { blocks: [
      block(470, 766, [line('$value', 39), line('+51% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(289, 854, [line('Financial', 40, 800), line('Solutions', 40, 800)], { lineGap: 13 }),
      block(289, 962, [line('93% gross margin', 29, 400, NOTE)]),
    ] },
    bitcoin_ecosystem: { blocks: [
      block(470, 1022, [line('$value', 39), line('(23%) Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(289, 1126, [line('Bitcoin', 40, 800), line('Ecosystem', 40, 800)], { lineGap: 13 }),
      block(289, 1232, [line('4% gross margin', 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(934, 510, [line('Revenue', 40, 800), line('$value', 39), line('+5% Y/Y', 29, 400, NOTE)], { lineGap: 13 })] },
    gross_profit: { blocks: [block(1401, 352, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('+27% Y/Y', 29, 400, NOTE)], { lineGap: 13 })] },
    cost_of_revenue: { blocks: [block(1401, 1249, [line('Cost of', 34, 800, RED_LABEL), line('revenue', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], { lineGap: 13 })] },
    operating_loss: { blocks: [block(1679, 1038, [line('Operating', 40, 800, RED_LABEL), line('loss', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL), line('(3%) margin', 29, 400, NOTE), line('(9pp) Y/Y', 29, 400, NOTE)], { lineGap: 12 })] },
    operating_expenses: { blocks: [block(1869, 497, [line('Operating', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], { lineGap: 13 })] },
    product_development: { blocks: [block(RIGHT_X, 435, [line('Product', 31, 800, RED_LABEL), line('Development', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 11 })] },
    sales_marketing: { blocks: [block(RIGHT_X, 674, [line('S&M', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 })] },
    ga: { blocks: [block(RIGHT_X, 879, [line('G&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 })] },
    loan_losses: { blocks: [block(RIGHT_X, 1043, [line('Loan losses', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 })] },
    other_operating: { blocks: [block(RIGHT_X, 1238, [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 })] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, texts) => {
    const lines = labelsZh[id].blocks.flatMap((item) => item.lines);
    texts.forEach((text, index) => { lines[index].text = text; });
  };
  setLines('commerce_enablement', ['$value', '同比 +14%', '商业', '赋能', '毛利率 55%']);
  setLines('financial_solutions', ['$value', '同比 +51%', '金融', '解决方案', '毛利率 93%']);
  setLines('bitcoin_ecosystem', ['$value', '同比 (23%)', '比特币', '生态', '毛利率 4%']);
  setLines('revenue', ['收入', '$value', '同比 +5%']);
  setLines('gross_profit', ['毛利润', '$value', '同比 +27%']);
  setLines('cost_of_revenue', ['收入', '成本', '$value']);
  setLines('operating_loss', ['营业', '亏损', '$value', '利润率 (3%)', '同比 (9 个百分点)']);
  setLines('operating_expenses', ['运营', '费用', '$value']);
  setLines('product_development', ['产品', '开发', '$value']);
  setLines('sales_marketing', ['销售与营销', '$value']);
  setLines('ga', ['一般及行政', '$value']);
  setLines('loan_losses', ['贷款损失', '$value']);
  setLines('other_operating', ['其他', '$value']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'block-q1-fy26',
    name: 'Block · Q1 FY26',
    company: 'Block',
    meta: {
      company: 'Block',
      title: 'Block Q1 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/block-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 1862,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      interfaceAudit: { mode: 'error' },
      nodeRadius: 0,
      allowRasterAnnotations: true,
      labelWeight: 600,
      valueWeight: 300,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'block-company-logo', href: 'data/assets/raster-annotations/block/company-logo-fy25.png', x: 815, y: 205, width: 230, height: 293 },
      { key: 'block-commerce-enablement-icon', href: 'data/assets/raster-annotations/block/commerce-enablement-icon-fy25.png', x: 76, y: 543, width: 78, height: 78 },
      { key: 'block-financial-solutions-icon', href: 'data/assets/raster-annotations/block/financial-solutions-icon-fy25.png', x: 78, y: 854, width: 78, height: 78 },
      { key: 'block-bitcoin-ecosystem-icon', href: 'data/assets/raster-annotations/block/bitcoin-ecosystem-icon-fy25.png', x: 79, y: 1130, width: 78, height: 78 },
    ],
    layout: {
      scale: 1,
      nodes: {
        commerce_enablement: { x: 432, y: 503, width: 71, height: 195 },
        financial_solutions: { x: 432, y: 858, width: 71, height: 87 },
        bitcoin_ecosystem: { x: 432, y: 1115, width: 71, height: 119 },
        revenue: { x: 899, y: 663, width: 70, height: 406 },
        gross_profit: { x: 1366, y: 498, width: 71, height: 194 },
        cost_of_revenue: { x: 1366, y: 1019, width: 71, height: 210 },
        operating_loss: { x: 1644, y: 1005, width: 71, height: 10 },
        operating_expenses: { x: 1834, y: 658, width: 70, height: 206 },
        product_development: { x: 2300, y: 449, width: 71, height: 68 },
        sales_marketing: { x: 2300, y: 675, width: 71, height: 56 },
        ga: { x: 2300, y: 890, width: 71, height: 42 },
        loan_losses: { x: 2300, y: 1081, width: 71, height: 31 },
        other_operating: { x: 2300, y: 1271, width: 71, height: 5 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'commerce_enablement', col: 0, order: 0, type: 'source', label: ['Commerce', 'Enablement'], value: 2.9, notes: ['+14% Y/Y', '55% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'financial_solutions', col: 0, order: 1, type: 'source', label: ['Financial', 'Solutions'], value: 1.3, notes: ['+51% Y/Y', '93% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'bitcoin_ecosystem', col: 0, order: 2, type: 'source', label: ['Bitcoin', 'Ecosystem'], value: 1.8, notes: ['(23%) Y/Y', '4% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.1, notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.9, notes: ['+27% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -0.2, notes: ['(3%) margin', '(9pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 0, type: 'cost', label: ['Product', 'Development'], value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 1, type: 'cost', label: 'S&M', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'loan_losses', col: 5, order: 3, type: 'cost', label: 'Loan losses', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.034, valueText: '($34M)', color: OTHER_NODE, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'commerce_enablement', target: 'revenue', value: 2.9, sourceWidth: 195, targetWidth: 195, y0: 600.5, y1: 760.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'financial_solutions', target: 'revenue', value: 1.3, sourceWidth: 87, targetWidth: 87, y0: 901.5, y1: 901.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'bitcoin_ecosystem', target: 'revenue', value: 1.8, sourceWidth: 119, targetWidth: 124, y0: 1174.5, y1: 1007, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.9, sourceWidth: 194, targetWidth: 194, y0: 760, y1: 595, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.1, sourceWidth: 210, targetWidth: 210, y0: 963, y1: 1124, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.9, sourceWidth: 194, targetWidth: 194, y0: 595, y1: 755, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.2, sourceWidth: 10, targetWidth: 12, y0: 1010, y1: 858, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1715, x1: 1834, c1x: 1750, c1y: 1010, c2x: 1800, c2y: 858 } },
      { source: 'operating_expenses', target: 'product_development', value: 1.0, sourceWidth: 68, targetWidth: 68, y0: 692, y1: 483, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 0.9, sourceWidth: 56, targetWidth: 56, y0: 754, y1: 703, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.7, sourceWidth: 42, targetWidth: 42, y0: 803, y1: 911, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'loan_losses', value: 0.5, sourceWidth: 31, targetWidth: 31, y0: 839.5, y1: 1096.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 0.034, sourceWidth: 9, targetWidth: 5, y0: 859.5, y1: 1273.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Block · 2026 财年第一季度',
        meta: { title: 'Block 2026 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 1250 },
        nodes: {
          commerce_enablement: { label: ['商业', '赋能'], notes: ['同比 +14%', '毛利率 55%'] },
          financial_solutions: { label: ['金融', '解决方案'], notes: ['同比 +51%', '毛利率 93%'] },
          bitcoin_ecosystem: { label: ['比特币', '生态'], notes: ['同比 (23%)', '毛利率 4%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['同比 +27%'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (9 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          product_development: { label: '产品开发' },
          sales_marketing: { label: '销售与营销' },
          ga: { label: '一般及行政' },
          loan_losses: { label: '贷款损失' },
          other_operating: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

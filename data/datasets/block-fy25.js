/* ====================================================================
 * Block - FY25 income statement ($B)
 * Reconstructed from input/processed/block-fy25.png as a measured fixed
 * d3-Sankey layout with validated runtime raster identity annotations.
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
  const PALE_RED = '#e1d9d9';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_X = 2493;

  const labelsEn = {
    commerce_enablement: {
      blocks: [
        { x: 470, top: 418, anchor: 'middle', lineGap: 13, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 289, top: 557, anchor: 'middle', lineGap: 13, lines: [
          { text: 'Commerce', size: 40, weight: 800 },
          { text: 'Enablement', size: 40, weight: 800 },
        ] },
        { x: 289, top: 663, anchor: 'middle', lines: [
          { text: '54% gross margin', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    financial_solutions: {
      blocks: [
        { x: 470, top: 767, anchor: 'middle', lineGap: 12.5, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+28% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 289, top: 855, anchor: 'middle', lineGap: 13, lines: [
          { text: 'Financial', size: 40, weight: 800 },
          { text: 'Solutions', size: 40, weight: 800 },
        ] },
        { x: 289, top: 961, anchor: 'middle', lines: [
          { text: '92% gross margin', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    bitcoin_ecosystem: {
      blocks: [
        { x: 470, top: 987, anchor: 'middle', lineGap: 12.5, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(18%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 289, top: 1106, anchor: 'middle', lineGap: 14, lines: [
          { text: 'Bitcoin', size: 40, weight: 800 },
          { text: 'Ecosystem', size: 40, weight: 800 },
        ] },
        { x: 289, top: 1212, anchor: 'middle', lines: [
          { text: '5% gross margin', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    revenue: {
      blocks: [{ x: 930, top: 510, anchor: 'middle', lineGap: 13, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1399, top: 421, anchor: 'middle', lineGap: 13, lines: [
        { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1399, top: 1190, anchor: 'middle', lineGap: 13, lines: [
        { text: 'Cost of', size: 34, weight: 800, color: RED_LABEL },
        { text: 'revenue', size: 34, weight: 800, color: RED_LABEL },
        { text: '$value', size: 34, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1871, top: 299, anchor: 'middle', lineGap: 12.5, lines: [
        { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '7% margin', size: 29, weight: 400, color: NOTE },
        { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1866, top: 867, anchor: 'middle', lineGap: 13, lines: [
        { text: 'Operating', size: 34, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 34, weight: 800, color: RED_LABEL },
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_X, top: 319, anchor: 'middle', lineGap: 12.5, lines: [
        { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
        { text: '5% margin', size: 29, weight: 400, color: NOTE },
        { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_X, top: 536, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    other_non_operating: {
      blocks: [{ x: RIGHT_X, top: 632, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    product_development: {
      blocks: [
        { x: RIGHT_X, top: 740, anchor: 'middle', lineGap: 11, lines: [
          { text: 'Product', size: 31, weight: 800, color: RED_LABEL },
          { text: 'Development', size: 31, weight: 800, color: RED_LABEL },
        ] },
        { x: RIGHT_X, top: 824, anchor: 'middle', lines: [
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ] },
      ],
    },
    sales_marketing: {
      blocks: [{ x: RIGHT_X, top: 895, anchor: 'middle', lineGap: 10, lines: [
        { text: 'S&M', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    ga: {
      blocks: [{ x: RIGHT_X, top: 1038, anchor: 'middle', lineGap: 10, lines: [
        { text: 'G&A', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    loan_losses: {
      blocks: [{ x: RIGHT_X, top: 1172, anchor: 'middle', lineGap: 11, lines: [
        { text: 'Loan losses', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
    other_operating: {
      blocks: [{ x: RIGHT_X, top: 1308, anchor: 'middle', lineGap: 11, lines: [
        { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 31, weight: 400, color: RED_LABEL },
      ] }],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, block, texts) => {
    labelsZh[id].blocks[block].lines.forEach((line, index) => { line.text = texts[index]; });
  };
  setLines('commerce_enablement', 0, ['$value', '同比 +10%']);
  setLines('commerce_enablement', 1, ['商业', '赋能']);
  setLines('commerce_enablement', 2, ['毛利率 54%']);
  setLines('financial_solutions', 0, ['$value', '同比 +28%']);
  setLines('financial_solutions', 1, ['金融', '解决方案']);
  setLines('financial_solutions', 2, ['毛利率 92%']);
  setLines('bitcoin_ecosystem', 0, ['$value', '同比 (18%)']);
  setLines('bitcoin_ecosystem', 1, ['比特币', '生态']);
  setLines('bitcoin_ecosystem', 2, ['毛利率 5%']);
  setLines('revenue', 0, ['收入', '$value', '同比 +0%']);
  setLines('gross_profit', 0, ['毛利润', '$value', '同比 +17%']);
  setLines('cost_of_revenue', 0, ['收入', '成本', '$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 7%', '同比 +3 个百分点']);
  setLines('operating_expenses', 0, ['运营', '费用', '$value']);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 5%', '同比 (6 个百分点)']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('other_non_operating', 0, ['其他', '$value']);
  setLines('product_development', 0, ['产品', '开发']);
  setLines('sales_marketing', 0, ['销售与营销', '$value']);
  setLines('ga', 0, ['一般及行政', '$value']);
  setLines('loan_losses', 0, ['贷款损失', '$value']);
  setLines('other_operating', 0, ['其他', '$value']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'block-fy25',
    name: 'Block · FY25',
    company: 'Block',
    meta: {
      company: 'Block',
      title: 'Block FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Year ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/block-fy25.png', width: 2667, height: 1500 },
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
      { key: 'block-commerce-enablement-icon', href: 'data/assets/raster-annotations/block/commerce-enablement-icon-fy25.png', x: 76, y: 567, width: 78, height: 78 },
      { key: 'block-financial-solutions-icon', href: 'data/assets/raster-annotations/block/financial-solutions-icon-fy25.png', x: 78, y: 865, width: 78, height: 78 },
      { key: 'block-bitcoin-ecosystem-icon', href: 'data/assets/raster-annotations/block/bitcoin-ecosystem-icon-fy25.png', x: 79, y: 1121, width: 78, height: 78 },
    ],
    layout: {
      scale: 17.7,
      nodes: {
        commerce_enablement: { x: 432, y: 520, width: 71, height: 204 },
        financial_solutions: { x: 432, y: 869, width: 71, height: 73 },
        bitcoin_ecosystem: { x: 432, y: 1088, width: 71, height: 150 },
        revenue: { x: 899, y: 663, width: 70, height: 433 },
        gross_profit: { x: 1366, y: 576, width: 71, height: 184 },
        cost_of_revenue: { x: 1366, y: 930, width: 71, height: 246 },
        operating_profit: { x: 1834, y: 491, width: 70, height: 29 },
        operating_expenses: { x: 1834, y: 699, width: 70, height: 153 },
        net_profit: { x: 2300, y: 385, width: 71, height: 21 },
        tax: { x: 2300, y: 593, width: 71, height: 5 },
        other_non_operating: { x: 2300, y: 690, width: 71, height: 1 },
        product_development: { x: 2300, y: 759, width: 71, height: 50 },
        sales_marketing: { x: 2300, y: 919, width: 71, height: 38 },
        ga: { x: 2300, y: 1061, width: 71, height: 33 },
        loan_losses: { x: 2300, y: 1200, width: 71, height: 21 },
        other_operating: { x: 2300, y: 1351, width: 71, height: 2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'commerce_enablement', col: 0, order: 0, type: 'source', label: ['Commerce', 'Enablement'], value: 11.5, valueText: '$11.5B', notes: ['+10% Y/Y', '54% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'financial_solutions', col: 0, order: 1, type: 'source', label: ['Financial', 'Solutions'], value: 4.2, valueText: '$4.2B', notes: ['+28% Y/Y', '92% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'bitcoin_ecosystem', col: 0, order: 2, type: 'source', label: ['Bitcoin', 'Ecosystem'], value: 8.5, valueText: '$8.5B', notes: ['(18%) Y/Y', '5% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 24.2, valueText: '$24.2B', notes: ['+0% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.4, valueText: '$10.4B', notes: ['+17% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 13.8, valueText: '($13.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, valueText: '$1.7B', notes: ['7% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 8.7, valueText: '($8.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.3, valueText: '$1.3B', notes: ['5% margin', '(6pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0, valueText: '($0.0B)', color: PALE_RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 4, order: 3, type: 'cost', label: ['Product', 'Development'], value: 2.9, valueText: '($2.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 4, type: 'cost', label: 'S&M', value: 2.3, valueText: '($2.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'loan_losses', col: 4, order: 6, type: 'cost', label: 'Loan losses', value: 1.3, valueText: '($1.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 7, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'commerce_enablement', target: 'revenue', value: 11.5, sourceWidth: 204, targetWidth: 206, y0: 622, y1: 766, linkTint: GRAY_LINK },
      { source: 'financial_solutions', target: 'revenue', value: 4.2, sourceWidth: 73, targetWidth: 77, y0: 905.5, y1: 907.5, linkTint: GRAY_LINK },
      { source: 'bitcoin_ecosystem', target: 'revenue', value: 8.5, sourceWidth: 150, targetWidth: 150, y0: 1163, y1: 1021, linkTint: GRAY_LINK },

      { source: 'revenue', target: 'gross_profit', value: 10.4, sourceWidth: 184, targetWidth: 184, y0: 755, y1: 668, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.8, sourceWidth: 249, targetWidth: 246, y0: 971.5, y1: 1053, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 1.7, sourceWidth: 29, targetWidth: 29, y0: 590.5, y1: 505.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.7, sourceWidth: 155, targetWidth: 153, y0: 682.5, y1: 775.5, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 22, targetWidth: 21, y0: 502, y1: 395.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 6, targetWidth: 5, y0: 516, y1: 595.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 0, sourceWidth: 1, targetWidth: 1, y0: 519.5, y1: 690.5, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'product_development', value: 2.9, sourceWidth: 51.3, targetWidth: 50, y0: 724.65, y1: 784, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 2.3, sourceWidth: 40.7, targetWidth: 38, y0: 770.65, y1: 938, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 2.0, sourceWidth: 35.4, targetWidth: 33, y0: 808.7, y1: 1077.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'loan_losses', value: 1.3, sourceWidth: 23, targetWidth: 21, y0: 837.9, y1: 1210.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 0.1, sourceWidth: 2.6, targetWidth: 2, y0: 850.7, y1: 1352, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Block · 2025 财年',
        meta: {
          title: 'Block 2025 财年利润表',
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月 31 日的年度',
          titleTextLength: 1250,
        },
        nodes: {
          commerce_enablement: { label: ['商业', '赋能'], notes: ['同比 +10%', '毛利率 54%'] },
          financial_solutions: { label: ['金融', '解决方案'], notes: ['同比 +28%', '毛利率 92%'] },
          bitcoin_ecosystem: { label: ['比特币', '生态'], notes: ['同比 (18%)', '毛利率 5%'] },
          revenue: { label: '收入', notes: ['同比 +0%'] },
          gross_profit: { label: '毛利润', notes: ['同比 +17%'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (6 个百分点)'] },
          tax: { label: '税费' },
          other_non_operating: { label: '其他' },
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

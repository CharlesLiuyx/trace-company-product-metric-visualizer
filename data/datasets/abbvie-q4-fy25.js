/* AbbVie Q4 FY25 income statement ($B), measured against the local reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NAVY = '#071d49';
  const NAVY_LABEL = '#071d48';
  const NAVY_LINK = '#8892a6';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#de7373';
  const NOTE = '#666666';
  const RIGHT_X = 2470;

  const layoutLabels = {
    immunology: { blocks: [
      { x: 495.5, top: 280, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+18% Y/Y', size: 28, color: NOTE }] },
      { x: 437, top: 427, anchor: 'end', lines: [{ text: 'Immunology', size: 39, weight: 800 }] },
    ] },
    oncology: { blocks: [
      { x: 495.5, top: 576, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(2%) Y/Y', size: 28, color: NOTE }] },
      { x: 427, top: 656, anchor: 'end', lines: [{ text: 'Oncology', size: 39, weight: 800 }] },
    ] },
    aesthetics: { blocks: [
      { x: 495.5, top: 729, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(1%) Y/Y', size: 28, color: NOTE }] },
      { x: 437, top: 805, anchor: 'end', lines: [{ text: 'Aesthetics', size: 40, weight: 800 }] },
    ] },
    neuroscience: { blocks: [
      { x: 495.5, top: 864, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '+18% Y/Y', size: 28, color: NOTE }] },
      { x: 437, top: 956, anchor: 'end', lines: [{ text: 'Neuroscience', size: 40, weight: 800 }] },
    ] },
    eye_care: { blocks: [
      { x: 495.5, top: 1048, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(10%) Y/Y', size: 28, color: NOTE }] },
      { x: 427, top: 1119, anchor: 'end', lines: [{ text: 'Eye Care', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 495.5, top: 1165, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: '(10%) Y/Y', size: 28, color: NOTE }] },
      { x: 410, top: 1237, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 963, top: 518, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+10% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1430, top: 343, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '73% margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] }] },
    cost_of_products_sold: { blocks: [{ x: 1430, top: 1107, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 39, weight: 800 }, { text: 'products sold', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    operating_profit: { blocks: [{ x: 1897, top: 225, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '27% margin', size: 28, color: NOTE }, { text: '+37pp Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1897, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39 }] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 268, anchor: 'start', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '11% margin', size: 28, color: NOTE }, { text: '+11pp Y/Y', size: 28, color: NOTE }] }] },
    other_expense: { blocks: [{ x: RIGHT_X, top: 520, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax_primary: { blocks: [{ x: RIGHT_X, top: 629, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax_secondary: { blocks: [{ x: RIGHT_X, top: 729, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 907, anchor: 'start', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '23% of revenue', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 1082, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '16% of revenue', size: 28, color: NOTE }, { text: '(29pp) Y/Y', size: 28, color: NOTE }] }] },
    other_opex: { blocks: [{ x: RIGHT_X, top: 1248, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '6% of revenue', size: 28, color: NOTE }, { text: '(4pp) Y/Y', size: 28, color: NOTE }] }] },
  };

  function localizedLayoutLabels(base, textByNode, overrides = {}) {
    const localized = {};
    Object.entries(base).forEach(([node, spec]) => {
      localized[node] = {
        ...spec,
        blocks: spec.blocks.map((block, blockIndex) => ({
          ...block,
          lines: block.lines.map((line, lineIndex) => ({
            ...line,
            text: textByNode[node][blockIndex][lineIndex],
          })),
        })),
      };
    });
    return { ...localized, ...overrides };
  }

  const zhLayoutLabels = localizedLayoutLabels(layoutLabels, {
    immunology: [['$value', '同比 +18%'], ['免疫']],
    oncology: [['$value', '同比 (2%)'], ['肿瘤']],
    aesthetics: [['$value', '同比 (1%)'], ['美学']],
    neuroscience: [['$value', '同比 +18%'], ['神经科学']],
    eye_care: [['$value', '同比 (10%)'], ['眼科']],
    other_revenue: [['$value', '同比 (10%)'], ['其他']],
    revenue: [['收入', '$value', '同比 +10%']],
    gross_profit: [['毛利润', '$value', '利润率 73%', '同比 +2 个百分点']],
    cost_of_products_sold: [['产品销售', '成本', '$value']],
    operating_profit: [['营业利润', '$value', '利润率 27%', '同比 +37 个百分点']],
    operating_expenses: [['营业', '费用', '$value']],
    net_profit: [['净利润', '$value', '利润率 11%', '同比 +11 个百分点']],
    other_expense: [['其他', '$value']],
    tax_primary: [['税费', '$value']],
    tax_secondary: [['税费', '$value']],
    sga: [['销售、一般及行政费用', '$value', '占收入 23%', '同比 (2 个百分点)']],
    rnd: [['研发', '$value', '占收入 16%', '同比 (29 个百分点)']],
    other_opex: [['其他', '$value', '占收入 6%', '同比 (4 个百分点)']],
  }, {
    net_profit: { blocks: [{ x: 2410, top: 268, anchor: 'start', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 11%', size: 28, color: NOTE }, { text: '同比 +11 个百分点', size: 28, color: NOTE }] }] },
    other_expense: { blocks: [{ x: 2410, top: 520, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax_primary: { blocks: [{ x: 2410, top: 629, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    tax_secondary: { blocks: [{ x: 2410, top: 729, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31 }] }] },
    sga: { blocks: [{ x: 2410, top: 907, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及行政费用', size: 23, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 23%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2410, top: 1082, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 16%', size: 28, color: NOTE }, { text: '同比 (29 个百分点)', size: 28, color: NOTE }] }] },
    other_opex: { blocks: [{ x: 2410, top: 1248, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 6%', size: 28, color: NOTE }, { text: '同比 (4 个百分点)', size: 28, color: NOTE }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'abbvie-q4-fy25',
    name: 'AbbVie · Q4 FY25',
    company: 'AbbVie',
    meta: {
      company: 'AbbVie',
      title: 'AbbVie Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/abbvie-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334.5,
      titleY: 202,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2165,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY_LABEL },
        hub: { node: NAVY, label: NAVY_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/abbvie/company-wordmark.png', x: 630, y: 235, width: 650, height: 140 },
      { key: 'immunology-products', href: 'data/assets/raster-annotations/abbvie/immunology-products.png', x: 0, y: 340, width: 175, height: 175 },
      { key: 'oncology-imbruvica', href: 'data/assets/raster-annotations/abbvie/oncology-imbruvica.png', x: 0, y: 640, width: 185, height: 85 },
      { key: 'aesthetics-botox-cosmetic', href: 'data/assets/raster-annotations/abbvie/aesthetics-botox-cosmetic.png', x: 8, y: 788, width: 158, height: 78 },
      { key: 'neuroscience-botox', href: 'data/assets/raster-annotations/abbvie/neuroscience-botox.png', x: 5, y: 953, width: 170, height: 68 },
      { key: 'eye-care-ozurdex', href: 'data/assets/raster-annotations/abbvie/eye-care-ozurdex.png', x: 15, y: 1083, width: 165, height: 104 },
    ],
    layout: {
      scale: 1,
      nodes: {
        immunology: { x: 459, y: 367, width: 73, height: 167 },
        oncology: { x: 459, y: 663, width: 73, height: 33 },
        aesthetics: { x: 459, y: 816, width: 73, height: 25 },
        neuroscience: { x: 459, y: 951, width: 73, height: 58 },
        eye_care: { x: 459, y: 1135, width: 73, height: 12 },
        other_revenue: { x: 459, y: 1252, width: 73, height: 29 },
        revenue: { x: 926, y: 657, width: 73, height: 321 },
        gross_profit: { x: 1393, y: 520, width: 73, height: 235 },
        cost_of_products_sold: { x: 1393, y: 998, width: 73, height: 86 },
        operating_profit: { x: 1860, y: 403, width: 73, height: 87 },
        operating_expenses: { x: 1860, y: 747, width: 73, height: 146 },
        net_profit: { x: 2328, y: 299, width: 73, height: 35 },
        other_expense: { x: 2328, y: 546, width: 73, height: 23 },
        tax_primary: { x: 2328, y: 654, width: 73, height: 17 },
        tax_secondary: { x: 2328, y: 754, width: 73, height: 14 },
        sga: { x: 2328, y: 907, width: 73, height: 76 },
        rnd: { x: 2328, y: 1105, width: 73, height: 49 },
        other_opex: { x: 2328, y: 1278, width: 73, height: 20 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'immunology', col: 0, order: 0, type: 'source', label: 'Immunology', value: 8.6, notes: ['+18% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'oncology', col: 0, order: 1, type: 'source', label: 'Oncology', value: 1.7, notes: ['(2%) Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'aesthetics', col: 0, order: 2, type: 'source', label: 'Aesthetics', value: 1.3, notes: ['(1%) Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'neuroscience', col: 0, order: 3, type: 'source', label: 'Neuroscience', value: 3.0, notes: ['+18% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'eye_care', col: 0, order: 4, type: 'source', label: 'Eye Care', value: 0.6, notes: ['(10%) Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 1.5, notes: ['(10%) Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 16.6, notes: ['+10% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.1, notes: ['73% margin', '+2pp Y/Y'] },
      { id: 'cost_of_products_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'products sold'], value: 4.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.5, notes: ['27% margin', '+37pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.5 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['11% margin', '+11pp Y/Y'] },
      { id: 'other_expense', col: 4, order: 1, type: 'cost', label: 'Other', value: 1.2 },
      { id: 'tax_primary', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.9 },
      { id: 'tax_secondary', col: 4, order: 3, type: 'cost', label: 'Tax', value: 0.7 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 3.9, notes: ['23% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 2.6, notes: ['16% of revenue', '(29pp) Y/Y'] },
      { id: 'other_opex', col: 4, order: 6, type: 'cost', label: 'Other', value: 1.0, notes: ['6% of revenue', '(4pp) Y/Y'] },
    ],
    links: [
      { source: 'immunology', target: 'revenue', value: 8.6, sourceWidth: 167, targetWidth: 167, y0: 450.5, y1: 740.5, linkTint: NAVY_LINK },
      { source: 'oncology', target: 'revenue', value: 1.7, sourceWidth: 33, targetWidth: 33, y0: 679.5, y1: 840.5, linkTint: NAVY_LINK },
      { source: 'aesthetics', target: 'revenue', value: 1.3, sourceWidth: 25, targetWidth: 25, y0: 828.5, y1: 869.5, linkTint: NAVY_LINK },
      { source: 'neuroscience', target: 'revenue', value: 3.0, sourceWidth: 58, targetWidth: 58, y0: 980, y1: 911, linkTint: NAVY_LINK },
      { source: 'eye_care', target: 'revenue', value: 0.6, sourceWidth: 12, targetWidth: 12, y0: 1141, y1: 946, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1.5, sourceWidth: 29, targetWidth: 26, y0: 1266.5, y1: 965, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.1, sourceWidth: 235, targetWidth: 235, y0: 774.5, y1: 637.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_products_sold', value: 4.6, sourceWidth: 86, targetWidth: 86, y0: 935, y1: 1041, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.5, sourceWidth: 87, targetWidth: 87, y0: 563.5, y1: 446.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.5, sourceWidth: 148, targetWidth: 146, y0: 681, y1: 820, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 35, targetWidth: 35, y0: 420.5, y1: 316.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 1.2, sourceWidth: 23, targetWidth: 23, y0: 449.5, y1: 557.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax_primary', value: 0.9, sourceWidth: 17, targetWidth: 17, y0: 469.5, y1: 662.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax_secondary', value: 0.7, sourceWidth: 12, targetWidth: 14, y0: 484, y1: 761, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.9, sourceWidth: 76, targetWidth: 76, y0: 785, y1: 945, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.6, sourceWidth: 51, targetWidth: 49, y0: 848.5, y1: 1129.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 1.0, sourceWidth: 19, targetWidth: 20, y0: 883.5, y1: 1288, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '艾伯维 · 2025 财年第四季度',
        meta: { title: '艾伯维 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleSize: 114, titleTextLength: 1800 },
        nodes: {
          immunology: { label: '免疫', notes: ['同比 +18%'] },
          oncology: { label: '肿瘤', notes: ['同比 (2%)'] },
          aesthetics: { label: '美学', notes: ['同比 (1%)'] },
          neuroscience: { label: '神经科学', notes: ['同比 +18%'] },
          eye_care: { label: '眼科', notes: ['同比 (10%)'] },
          other_revenue: { label: '其他', notes: ['同比 (10%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 +2 个百分点'] },
          cost_of_products_sold: { label: '产品销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +37 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +11 个百分点'] },
          other_expense: { label: '其他' },
          tax_primary: { label: '税费' },
          tax_secondary: { label: '税费' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 23%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 (29 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 6%', '同比 (4 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
